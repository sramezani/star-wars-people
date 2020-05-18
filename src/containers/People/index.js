import React, { useEffect, useState } from "react";

import ReactPlaceholder from 'react-placeholder';
import { useDispatch, useSelector } from "react-redux";
import { peopleAction, updatePeopleData, updatePageNumber } from "../../redux/core/actions";
import { PeopleBpx } from '../../components';

import 'react-placeholder/lib/reactPlaceholder.css';

import styles from './style.module.scss';
import { Background, PeopleMain, PlaceHolderBox, MoreBtn } from "./styled";


export default function People() {
    const peopleData = useSelector(state => state.peopleData);
    const pageState = useSelector(state => state.page);
    const [people, setPeople] = useState({
        count: peopleData.count || 0,
        next: peopleData.next || '',
        previous: peopleData.previous || '',
        results: peopleData.results || []
    });
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(pageState || 1);
    const [placeHolderRow, setPlaceHolderRow] = useState([1, 2, 3, 4, 5, 6]);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (people.results.length === 0) {
            setLoading(true);
            getPeopleAction();
        }
    }, [people]);

    const getPeopleAction = () => {
        dispatch(peopleAction(page))
        .then((res) => {
            setLoading(false);
            setPlaceHolderRow([1]);
            
            const resData = {
                count: res.count,
                next: res.next,
                previous: res.previous,
                results: [...people.results, ...res.results]
            };

            setPeople(resData);
            dispatch(updatePeopleData(resData));
            dispatch(updatePageNumber(page + 1));
            setPage(page => page + 1);
        })
    }

    const moreBtnClick = () => {
        setLoading(true);
        getPeopleAction()
    }

    return (
        < >
            <Background />
            <div className="container">

                <PeopleMain>
                {
                    people.results.map((item, index) => {
                        return (
                            <div key={index} className="row justify-content-md-center">
                                <div className="col-md-8">
                                    <PeopleBpx
                                        item={item}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
                
                {
                    loading && placeHolderRow.map((item, index) => {
                        return (
                            <div key={index} className="row justify-content-md-center">
                                <div className="col-md-8">
                                    <PlaceHolderBox>
                                        <ReactPlaceholder showLoadingAnimation type='text' rows={3} />
                                    </PlaceHolderBox>
                                </div>
                            </div>
                        )
                    })
                }

                {
                    people.next && !loading &&
                        <div className="row justify-content-md-center">
                            <div className="col-md-8">
                                <MoreBtn onClick={() => moreBtnClick()}>
                                    More
                                </MoreBtn>
                            </div>
                        </div>
                }

                </PeopleMain>
            </div>
        </>
    )
}
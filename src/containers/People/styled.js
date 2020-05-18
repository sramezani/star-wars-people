import styled from "styled-components";

import bg1 from '../../assets/images/bg1.jpg';

export const Background = styled.div`
    background:url(${bg1});
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const PeopleMain = styled.div`
    margin: 80px auto 60px auto;

`;

export const PlaceHolderBox = styled.div`
    width:100%;
    min-height:110px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.grey};
    margin: 0 0 20px 0;
    border-radius: 0px;
    padding: 15px;
`;

export const MoreBtn = styled.div`
    text-align: center;
    color: ${props => props.theme.white};
    padding: 10px 0;
    font-size: 22px;
    cursor: pointer;
    background-color:${props => props.theme.green};
`;



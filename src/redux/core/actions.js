import { actionTypes } from './actionTypes';
import { AppAPI } from '../../lib';

export const updatePeopleData = (data) => {
    return {
        type : actionTypes.UPDATE_PEOPLE_DATA,
        payload: data
    }
}

export const updatePageNumber = (number) => {
    return {
        type : actionTypes.UPDATE_PAGE_NUMBER,
        payload: number
    }
}

export const peopleAction = (page) => {
    return (dispatch, getState) => new Promise(async (resolve, reject) => {
        AppAPI.people({ format: 'json', page })
            .then((res) => {

                return resolve(res);
            })
            .catch((err) => {
                return reject(err);
            });
    });
}


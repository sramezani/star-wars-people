import { actionTypes } from './actionTypes';

const initialState = {
    peopleData: {},
    page: 1
}

export default function core(state = initialState, action) {
    switch (action.type) {

        case actionTypes.UPDATE_PEOPLE_DATA:
            if (!action.payload) return state;

            return {
                ...state,
                peopleData: {
                    ...state.peopleData,
                    ...action.payload,
                },
            };

        case actionTypes.UPDATE_PAGE_NUMBER:
            if (!action.payload) return state;

            return {
                ...state,
                page: action.payload
            };



        default:
            return {...state}
        }
    }
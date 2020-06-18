import {GET_TECHNICIANS, SET_LOADING, TECHNICIANS_ERROR} from "../actions/types";

const initialState = {
    techniciansArray: [],
    loading: false,
    error: null
};

export default (state=initialState, { type, payload }) => {
    switch (type) {

        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_TECHNICIANS:
            return {
                ...state,
                techniciansArray: payload,
                loading: false
            };

        case TECHNICIANS_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };

        default:
            return state;
    }
};

import {ADD_LOG, DELETE_LOG, GET_LOGS, LOGS_ERROR, SET_LOADING} from "../actions/types";

const initialState = {
    logsArray: [],
    current: null,
    loading: false,
    error: null
};

export default (state=initialState, action) => {
    switch (action.type) {

        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case ADD_LOG:
            return {
                ...state,
                logsArray: [action.payload, ...state.logsArray],
                loading: false
            };

        case GET_LOGS:
            return {
                ...state,
                logsArray: action.payload,
                loading: false
            };

        case DELETE_LOG:
            const logsArray = state.logsArray.filter(log => log.id !== action.payload);
            return {
                ...state,
                logsArray,
                loading: false
            };

        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
};
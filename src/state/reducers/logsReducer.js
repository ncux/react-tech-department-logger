import {
    ADD_LOG,
    CLEAR_CURRENT,
    DELETE_LOG,
    GET_LOGS,
    LOGS_ERROR,
    SET_CURRENT,
    SET_LOADING,
    UPDATE_LOG
} from "../actions/types";

// initialState = logs in the combinedReducer
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

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };

        case UPDATE_LOG:
            return {
                ...state,
                logsArray: state.logsArray.map(log => log.id === action.payload.id ? action.payload : log),
                loading: false
            };

        case DELETE_LOG:
            return {
                ...state,
                logsArray: state.logsArray.filter(log => log.id !== action.payload),
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
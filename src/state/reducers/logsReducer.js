import {
    ADD_LOG,
    CLEAR_CURRENT,
    DELETE_LOG,
    GET_LOGS,
    LOGS_ERROR, SEARCH_LOGS,
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

export default (state=initialState, { type, payload }) => {
    switch (type) {

        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case ADD_LOG:
            return {
                ...state,
                logsArray: [payload, ...state.logsArray],
                loading: false
            };

        case GET_LOGS:
            return {
                ...state,
                logsArray: payload,
                loading: false
            };

        case SET_CURRENT:
            return {
                ...state,
                current: payload
            };

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };

        case UPDATE_LOG:
            return {
                ...state,
                logsArray: state.logsArray.map(log => log.id === payload.id ? payload : log),
                loading: false
            };

        case DELETE_LOG:
            return {
                ...state,
                logsArray: state.logsArray.filter(log => log.id !== payload),
                loading: false
            };

        case SEARCH_LOGS:
            return {
                ...state,
                logsArray: payload,
                loading: false
            };

        case LOGS_ERROR:
            console.error(payload);
            return {
                ...state,
                error: payload,
                loading: false
            };

        default:
            return state;
    }
};

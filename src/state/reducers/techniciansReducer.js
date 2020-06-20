import {
    ADD_TECHNICIAN,
    DELETE_TECHNICIAN,
    GET_TECHNICIANS,
    SET_LOADING,
    TECHNICIANS_ERROR
} from "../actions/types";

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

        case ADD_TECHNICIAN:
            return {
                ...state,
                techniciansArray: [payload, ...state.techniciansArray],
                loading: false
            };

        case GET_TECHNICIANS:
            return {
                ...state,
                techniciansArray: payload,
                loading: false
            };

        case DELETE_TECHNICIAN:
            return {
                ...state,
                techniciansArray: state.techniciansArray.filter(tech => tech.id !== payload),
                loading: false
            };

        case TECHNICIANS_ERROR:
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

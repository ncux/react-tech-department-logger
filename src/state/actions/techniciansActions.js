import axios from 'axios';
import { setLoading } from './loading';
import {GET_LOGS, GET_TECHNICIANS, TECHNICIANS_ERROR} from "./types";

const SERVER_URL = `/technicians`;

export const getTechniciansAction = () => {

    return async dispatch => {
        try {
            setLoading();
            const { data } = await axios.get(SERVER_URL);
            console.log(data);
            return dispatch({ type: GET_TECHNICIANS, payload: data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: TECHNICIANS_ERROR, payload: e.response.statusText });
        }
    }
};

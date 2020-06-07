import axios from 'axios';
import { setLoading } from './loading';
import {GET_LOGS, LOGS_ERROR, ADD_LOG, DELETE_LOG} from "./types";
import { httpHeaders } from "../../config/axios";

const SERVER_URL = `/logs`;

export const getLogsAction = () => {

    return async dispatch => {
        try {
            setLoading();
            const { data } = await axios.get(SERVER_URL);
            console.log(data);
            return dispatch({ type: GET_LOGS, payload: data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: LOGS_ERROR, payload: e.response.data });
        }
    }
};

export const addLogAction = log => {

    return async dispatch => {
        try {
            setLoading();
            const { data } = await axios.post(SERVER_URL, JSON.stringify(log), httpHeaders);
            return dispatch({ type: ADD_LOG, payload: data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: LOGS_ERROR, payload: e.response.data });
        }
    }
};

export const deleteLogAction = id => {

    return async dispatch => {
        try {
            setLoading();
            await axios.delete(`${SERVER_URL}/${id}`);
            return dispatch({ type: DELETE_LOG, payload: id });
        } catch (e) {
            console.log(e);
            return dispatch({ type: LOGS_ERROR, payload: e.response.data });
        }
    }
};
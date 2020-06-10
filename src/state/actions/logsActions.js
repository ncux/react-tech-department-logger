import axios from 'axios';
import { setLoading } from './loading';
import {GET_LOGS, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS} from "./types";
import { httpHeaders } from "../../config/axios";

const SERVER_URL = `/logs`;

export const getLogsAction = () => {

    return async dispatch => {
        try {
            setLoading();
            const { data } = await axios.get(SERVER_URL);
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

// to populate the update log form
export const setCurrentAction = log => {
    return dispatch => dispatch({ type: SET_CURRENT, payload: log });
};

// clear the update log form
export const clearCurrentAction = () => {
    return dispatch => dispatch({ type: CLEAR_CURRENT });
}

export const updateLogAction = log => {

    return async dispatch => {
        try {
            setLoading();
            const { data } = await axios.put(`${SERVER_URL}/${log.id}`, JSON.stringify(log), httpHeaders);
            return dispatch({ type: UPDATE_LOG, payload: data });
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

// filter function for searching logs
export const searchLogsAction = query => {

    return async dispatch => {
        try {
            setLoading();
            const { data } = await axios.get(`${SERVER_URL}?q=${query}`);
            return dispatch({ type: SEARCH_LOGS, payload: data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: LOGS_ERROR, payload: e.response.data });
        }
    }
};
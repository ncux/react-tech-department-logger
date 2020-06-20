import axios from 'axios';
import { setLoading } from './loading';
import { ADD_TECHNICIAN, DELETE_TECHNICIAN, GET_TECHNICIANS, TECHNICIANS_ERROR } from "./types";
import { httpHeaders } from "../../config/axios";

const SERVER_URL = `/technicians`;

export const addTechnicianAction = technician => {

    return async dispatch => {
        try {
            setLoading();
            const { data } = await axios.post(SERVER_URL, JSON.stringify(technician), httpHeaders);
            return dispatch({ type: ADD_TECHNICIAN, payload: data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: TECHNICIANS_ERROR, payload: e.response.statusText });
        }
    }
};

export const getTechniciansAction = () => {

    return async dispatch => {
        try {
            setLoading();
            const { data } = await axios.get(SERVER_URL);
            return dispatch({ type: GET_TECHNICIANS, payload: data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: TECHNICIANS_ERROR, payload: e.response.statusText });
        }
    }
};

export const deleteTechnicianAction = id => {

    return async dispatch => {
        try {
            setLoading();
            await axios.delete(`${SERVER_URL}/${id}`);
            return dispatch({ type: DELETE_TECHNICIAN, payload: id });
        } catch (e) {
            console.log(e);
            return dispatch({ type: TECHNICIANS_ERROR, payload: e.response.statusText });
        }
    }
};

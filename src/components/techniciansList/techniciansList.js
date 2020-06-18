import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTechniciansAction } from "../../state/actions/techniciansActions";

export const TechniciansList = props => {

    const loading = useSelector(state => state.technicians.loading);
    const techniciansArray = useSelector(state => state.technicians.techniciansArray);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTechniciansAction());
        // eslint-disable-next-line
    }, []);

    const showTechniciansList = (
        !loading && techniciansArray.length > 0 && techniciansArray.map(technician => (
            <option key={technician.id} value={technician.name}>{
                technician.name }
            </option>
        ))
    );

    return (
        <>
            { showTechniciansList }
        </>
    );

};


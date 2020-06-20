import React from 'react';
import { useDispatch } from "react-redux";
import classes from './technician.css'
import { deleteTechnicianAction } from "../../../../state/actions/techniciansActions";

export const Technician = ({ technician }) => {

    const { id, name } = technician;
    const dispatch = useDispatch();

    return (
        <div className={classes.flexContainer}>
            <span> { name } </span>
            <a href="#" className="secondary-content">
                <i onClick={ () => dispatch(deleteTechnicianAction(id)) } className="material-icons grey-text">
                    delete
                </i>
            </a>
        </div>

    );

};


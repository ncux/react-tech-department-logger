import React from 'react';
import classes from './technician.css'

export const Technician = ({ tech }) => {

    return (
        <div className={classes.flexContainer}>
            <span> { tech.name } </span>
            <a href="#" className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
        </div>

    );

};


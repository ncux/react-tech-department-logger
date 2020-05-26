import React, { useState } from 'react';
import styles from './addTechModal.module.css';
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';

const SERVER_URL = `/logs`;

export const AddTechModal = props => {

    const [techName, setTechName] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if(techName == '') {
            M.toast({ html: "The technician's name is required" });
        }
        console.log(techName);
        setTechName('');
    };

    return (
        <div id="add-tech-modal" className={`modal ${styles.modalStyle}`}>
            <div className="modal-content">
                <h4>Add New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={ techName }  onChange={ e => setTechName(e.target.value) } />
                        <label htmlFor="message" className="active">Technician's Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a hidden="#" onClick={ onSubmit } className="modal-close btn waves-effect waves-green">
                    Submit
                </a>
            </div>
        </div>
    );

};


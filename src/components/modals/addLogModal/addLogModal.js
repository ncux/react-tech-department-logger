import React, { useState } from 'react';
import styles from './addLogModal.module.css';
import M from 'materialize-css/dist/js/materialize.min';
import axios from 'axios';

const SERVER_URL = `/logs`;

export const AddLogModal = props => {

    const [message, setMessage] = useState('');
    const [urgent, setUrgent] = useState(false);
    const [technician, setTechnician] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if(message == '' || technician == '') {
            M.toast({ html: 'Log message and technician name are both required' });
        }
        console.log(message, urgent, technician);
        setMessage('');
        setUrgent(false);
        setTechnician('');
    };

    return (
        <div id="add-log-modal" className={`modal ${styles.modalStyle}`}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={ message }  onChange={ e => setMessage(e.target.value) } />
                        <label htmlFor="message" className="active">Log message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="technician" value={ technician } className="browser-default" onChange={ event => setTechnician(event.target.value) }>
                            <option value="" disabled>Select Technician</option>
                            <option value="Mary">Mary</option>
                            <option value="Tom">Tom</option>
                            <option value="Jack">Jack</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" value={ urgent } checked={ urgent } onChange={ e => setUrgent(!urgent) } />
                                <span>Urgent</span>
                            </label>
                        </p>
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


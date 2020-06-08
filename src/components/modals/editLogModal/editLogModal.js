import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min';
import styles from './editLogModal.module.css';
import { updateLogAction } from "../../../state/actions/logsActions";

const EditLogModal = ({ current, updateLogAction }) => {

    const [message, setMessage] = useState('');
    const [urgent, setUrgent] = useState(false);
    const [technician, setTechnician] = useState('');

    useEffect(() => {
        if(current) {
            const { message, urgent, technician } = current;
            setMessage(message);
            setUrgent(urgent);
            setTechnician(technician);
        }
    }, [current]);

    const onSubmit = e => {
        e.preventDefault();
        if(message == '' || technician == '') {
            M.toast({ html: 'Log message and technician name are both required' });
        }
        updateLogAction({ id: current.id, message, urgent, technician, date: new Date() });
        M.toast({ html: 'Log successfully updated!' });
        setMessage('');
        setUrgent(false);
        setTechnician('');
    };

    return (
        <div id="edit-log-modal" className={`modal ${styles.modalStyle}`}>
            <div className="modal-content">
                <h4 className="text-accent-2">Edit System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message"
                               value={ message }
                               onChange={ e => setMessage(e.target.value) }
                               placeholder="Log message"
                        />
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

const mapStateToProps = state => ({
    current: state.logs.current
});

export default connect(mapStateToProps, { updateLogAction })(EditLogModal);


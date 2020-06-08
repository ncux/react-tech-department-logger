import React from 'react';
import Moment from "react-moment";
import { connect } from 'react-redux';
import styles from './log.module.css';
import { deleteLogAction, setCurrentAction } from "../../../state/actions/logsActions";

const Log = ({ log, deleteLogAction, setCurrentAction }) => {

    const { id, message, urgent, technician, date } = log;

    return (
        <li className="collection-item">
            <div className={styles.flexLog}>
               <div>
                   <small className="grey-text">
                       <Moment format="YYYY MMMM Do, HH:mm">{ date }</Moment>
                   </small> <br />
                   <a href="#edit-log-modal" onClick={ () => setCurrentAction(log) } className={`modal-trigger ${urgent ? 'red-text' : 'blue-text'}`}>
                       <span className="black-text">Message: </span> { id } <span className="black-text">| </span>
                       { message }
                   </a>
                   <p className="black-text">
                       Technician: <span className="blue-text">{ technician }</span>
                   </p>
               </div>
                <a href="#" onClick={ () => deleteLogAction(id) } className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );

};

export default connect(null, { deleteLogAction, setCurrentAction })(Log);


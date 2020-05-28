import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import classes from './techListModal.module.css';
import Loading from "../../loading/loading";
import { Technician } from "./technician/technician";
import { Context } from "../../../context";

Modal.setAppElement('#root');

const SERVER_URL = `/technicians`;

export const TechListModal = props => {

    const { modalIsOpen, setModalIsOpen } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [technicians, setTechnicians] = useState([]);

    // get all logs
    useEffect(() => {
        getTechnicians();
        // eslint-disable-next-line
    }, []);

    const getTechnicians = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(SERVER_URL);
            console.log(data);
            setTechnicians(data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    const showTechnicians = (
        !loading && technicians.length === 0 ? (<p className="center">No technicians</p>)
            : (
                <ul className="collection">
                    {
                        technicians.map(tech => (
                            <li className="collection-item">
                                <Technician tech={ tech } key={tech.id} />
                            </li>
                        ))
                    }
                </ul>
            )
    );

    if(loading) return (<Loading />);

    return (
        <Modal isOpen={ modalIsOpen } onRequestClose={ () => setModalIsOpen(false) }>
            <div className={classes.modalContent}>
                <div className="modal-content">
                    <h4 className="center">Technicians</h4>
                    { showTechnicians }
                </div>
                <a hidden="#" onClick={ () => setModalIsOpen(false) } className="btn waves-effect waves-green">
                    Close
                </a>
            </div>
        </Modal>
    );

};


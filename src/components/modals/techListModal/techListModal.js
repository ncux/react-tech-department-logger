import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import classes from './techListModal.module.css';
import Loading from "../../loading/loading";
import { Technician } from "./technician/technician";
import { Context } from "../../../context";
import { getTechniciansAction } from "../../../state/actions/techniciansActions";

Modal.setAppElement('#root');

export const TechListModal = props => {

    const loading = useSelector(state => state.technicians.loading);
    const techniciansArray = useSelector(state => state.technicians.techniciansArray);
    const dispatch = useDispatch();
    const { modalIsOpen, setModalIsOpen } = useContext(Context);

    useEffect(() => {
        dispatch(getTechniciansAction());
        // eslint-disable-next-line
    }, []);

    const showTechnicians = (
        !loading && techniciansArray.length === 0 ? (<p className="center">No technicians</p>)
            : (
                <ul className="collection">
                    {
                        techniciansArray.map(tech => (
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


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Loading from "../../loading/loading";
import { Technician } from "./technician/technician";

const SERVER_URL = `/technicians`;

export const TechListModal = props => {

    const [isOpen, setIsOpen] = useState(false);
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
        <Modal isOpen={ isOpen }>
            <div id="tech-list-modal" className="modal">
                <div className="modal-content">
                    <h4 className="center">Technicians</h4>
                    { showTechnicians }
                </div>
            </div>
        </Modal>
    );

};


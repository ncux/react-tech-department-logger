import React, { useState, createContext } from 'react';

export const Context = createContext();

export const ModalProvider = props => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <Context.Provider value={{ modalIsOpen, setModalIsOpen }}>
            { props.children }
        </Context.Provider>
    )
};





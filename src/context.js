import React, { useState, createContext } from 'react';

export const Context = createContext();

export const Provider = props => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <Context.Provider value={{ modalIsOpen, setModalIsOpen }}>
            { props.children }
        </Context.Provider>
    )
};





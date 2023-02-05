import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nemo impedit similique esse dolorem quidem temporibus incidunt porro quas quis?</p>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;

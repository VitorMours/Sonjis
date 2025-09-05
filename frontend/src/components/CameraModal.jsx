import React, { useState, useRef, useEffect } from 'react';

const CameraModal = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = (event) => {
        event.preventDefault();
        console.log("MOstrando o modal");
    }
    return (
        <div className="flex justify-center align-center content-center self-center border border-stone-300 rounded-md">
            <div className="card w-150 bg-base-200 h-100">ads</div>
        </div>
    );
};

export default CameraModal;
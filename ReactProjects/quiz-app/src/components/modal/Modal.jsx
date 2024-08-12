import React from 'react'
import './Modal.css'

const Modal = ({ score }) => {
    return (
        <div>
            <div className='modal-title'>Skor : {score}</div>
            <button onClick={() => window.location = "/"} className='modal-btn'>Yeniden Başla</button>
        </div>
    )
}

export default Modal
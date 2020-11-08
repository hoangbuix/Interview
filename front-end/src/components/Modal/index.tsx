import React from "react";
import "./Modal.scss";

interface ModalProps {
    handleSubmit?: any;
    handleClose?: any;
    show?: boolean;
}

const Modal: React.FC<ModalProps> = ({ handleSubmit, handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <div style={{fontSize: '24px', color: 'tomato', padding: '20px'}}>
                    {children}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                    <button onClick={handleSubmit} style={{ backgroundColor: "green", color: "white", fontSize: "18px", width: '7rem', margin: '10px' }}>Xác nhận</button>
                    <button onClick={handleClose} style={{ backgroundColor: "tomato", color: "white", fontSize: "18px", width: '7rem', margin: '10px' }}>Hủy</button>
                </div>
            </section>
        </div>
    )
};

export default Modal;
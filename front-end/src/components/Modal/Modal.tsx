import React from "react";
import "./Modal.style.scss";

interface Props {
    handleClose: any;
    show: boolean;
}

const Modal: React.FC<Props> = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <>
            <div className={showHideClassName}>
                <section className='modal-main'>
                    {children}
                    <button
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </section>
            </div>
        </>
    )
};

export default Modal;
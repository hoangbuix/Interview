import React from "react";
import "./Modal.style.scss";

interface Props {
    handleClose: () => void;
    show: boolean;
    title: string;
}

const Modal: React.FC<Props> = ({ handleClose, show, children, title }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <>
            <div className={showHideClassName}>
                <div className="modal-content slideDown">
                    <div className="modal-header">
                        <span className="close" onClick={handleClose}>×</span>
                        <h2>{title}</h2>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className="button good" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Modal;
import React from "react";
import "./Modal.style.scss";

interface Props {
    handleClose: () => void;
    submit: any;
    show: boolean;
    title: string;
    btnName: string;
}

const Modal: React.FC<Props> = ({ handleClose, submit, show, children, title, btnName }) => {
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
                        <button className="cancel" onClick={handleClose}> Cancel </button>
                        <button type="submit" onClick={submit} className="button good" >{btnName}</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Modal;
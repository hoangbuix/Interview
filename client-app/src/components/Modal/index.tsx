import React from "react";
import "./styles.scss";

const Modal: React.FC = ({ children, ...rest }) => {
    return (
        <div {...rest} className="container-modal">
            {children}
        </div>
    )
};

export default Modal;
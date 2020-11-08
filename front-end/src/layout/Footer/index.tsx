import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="container-footer">
            <span>{`Copy by @Dev ${new Date().getUTCFullYear()}`}</span>
        </footer>
    )
};

export default Footer;
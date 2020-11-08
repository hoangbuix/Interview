import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
    return (
        <header className="container-header">
            <div className="wrapper-header">
                <div className="header-left">
                    <h1>A</h1>
                </div>
                <div className="header-right">
                    <h1>B</h1>
                </div>
            </div>
        </header>
    )
};

export default Header;
import React from "react";
import *as FcIcons from "react-icons/fc"
import "./Navbar.scss";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar-container">
            <div className="wrapper-navbar">
                <div className="navbar-left">
                    <div className="navbar-logo"></div>
                </div>
                <div className="navbar-right">
                    <ul className="navbar-right-menu">
                        <li className="navbar-right-item">
                            <div className="wrapper-input">
                                <input type="text" placeholder="Search..." />
                                <button><FcIcons.FcSearch size={22}/></button>
                            </div>
                        </li>
                        <li className="navbar-right-item">
                            <span style={{position: "relative",top: "5px"}}><FcIcons.FcPortraitMode size={30}/></span>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
};

export default Navbar;
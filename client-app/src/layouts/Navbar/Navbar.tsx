import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";


const Navbar: React.FC = () => {
    return (
        <div className="container-navbar">
            <ul className="navbar-menu">
                <li className="navbar-item"><NavLink to="/">Trang chủ</NavLink></li>
                <li className="navbar-item"><NavLink to="/">A</NavLink></li>
            </ul>
        </div>
    )
};

export default Navbar;
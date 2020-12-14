import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const routes = [
    {
        path: "/admin",
        name: "A"
    },
    {
        path: "/admin",
        name: "B"
    },
    {
        path: "/admin",
        name: "A"
    },
    {
        path: "/admin",
        name: "B"
    }
]

const Navbar: React.FC = () => {
    return (
        <div className="container-navbar">
            <div className="wrapper-navbar">
                <ul className="navbar-menu">
                    {
                        routes.map((item, index) => (
                            <li className="navbar-item" key={index}><NavLink to={item.path}>{item.name}</NavLink></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};

export default Navbar;
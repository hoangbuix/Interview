import React from "react";
import "./styles.scss";
import * as Icons from "react-icons/ai";
import { Link } from "react-router-dom";

const routes = [
    {
        path: "/",
        icon: <Icons.AiFillHome size={24} />
    },
    {
        path: "/",
        icon: <Icons.AiFillHome size={24} />
    },
    {
        path: "/",
        icon: <Icons.AiFillHome size={24} />
    }
];

const Header: React.FC = () => {
    return (
        <header>
            <div className="wrapper-header">
                <div className="header-left">
                    <img src="https://th.bing.com/th/id/OIP.w053oXQq17MSGd8Thrp3zQHaHa?pid=Api&rs=1" alt="logo" />
                </div>
                <div className="header-center">
                    <div className="header-center-search">
                        <input type="search" />
                        <span><Icons.AiOutlineSearch /></span>
                    </div>
                </div>
                <div className="header-right">
                    <ul className="header-right-menu">
                        {
                            routes.map((item, index) => (
                                <li className="header-right-item" key={index}><Link to={item.path}>{item.icon}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;
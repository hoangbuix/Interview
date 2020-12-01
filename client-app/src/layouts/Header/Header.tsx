import React from "react";
import "./styles.css";
import * as Icons from "react-icons/fi"

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-wrapper">
                    <div className="header-left">
                        <img src="https://pbs.twimg.com/profile_images/948751466914697216/BtugqalC_400x400.jpg" alt="logo" />
                    </div>
                    <div className="header-main">
                        <input type="text" placeholder="Tìm kiếm" />
                    </div>
                    <div className="header-right">
                        <ul className="header-menu">
                            <li className="header-item"><a href="/">1</a></li>
                            <li className="header-item"><a href="/">2</a></li>
                            <li className="header-item"><a href="/">3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;
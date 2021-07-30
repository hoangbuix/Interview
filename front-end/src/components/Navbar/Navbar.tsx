import React from "react";
import { FiSearch } from "react-icons/fi";
import "./Navbar.style.scss";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>

                    <ul className="menu-items">
                        <li>
                            <div className="search">
                                <input type="text" placeholder="Tim kiem" />
                                <FiSearch />
                            </div>
                        </li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Category</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Testimonial</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                    <div className="logo">
                        <img src="https://cs.lhu.edu.vn/ViewPage/LHUVNB4/_default/image/Logo_ChimLac_W.png" alt="logo page" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
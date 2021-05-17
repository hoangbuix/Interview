import React from "react";
import "./Navbar.style.scss";


const toggleMobileMenu = () => {
    window.document.querySelector("#menu")?.classList.toggle("active");
    window.document.querySelector(".mobile-bar")?.classList.toggle("active");
}

const Navbar = () => {
    return (
        <nav>
            <ul id="menu">
                <li><a href="_">A</a></li>
                <li><a href="_">B</a></li>
                <li><a href="_">A</a></li>
                <li><a href="_">B</a></li>
            </ul>
            <div className="mobile-bar" onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
};

export default Navbar;
import React, { useEffect } from "react";
import "./Card.style.scss";
import { FaArrowRight, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
const Card = () => {

    useEffect(() => {
        const clc = window.document.querySelector('.cancel');
        const arr = window.document.querySelector('.arr_container');
        const left_container = window.document.querySelector('.left_container');

        arr?.addEventListener("click", () => {
            arr.classList.add("active_arr");
            if (left_container?.classList.contains("off")) {
                left_container.classList.remove("off");
                left_container.classList.add("active");
            }
        });

        clc?.addEventListener("click", () => {
            arr?.classList.remove("active_arr");
            if (left_container?.classList.contains("active")) {
                left_container.classList.remove("active");
                left_container.classList.add("off");
            }
        })

    }, [])

    return (
        <div className="wrapper-card center">
            <div className="box center">
                {/* <img src="https://m5u5g4q9.stackpathcdn.com/wp-content/uploads/SHOWBIZ-Image-08443813.jpg" alt="" /> */}
                <div>
                    <p className="user_name">SSS</p>
                    <p className="skill">Front-end</p>
                </div>
                <div className="arr_container center">
                    <i><FaArrowRight /></i>
                </div>
                <div className="left_container off">
                    <p>Skill</p>
                    <div className="skills">
                        <div>A</div>
                        <div>B</div>
                        <div>C</div>
                        <div>D</div>
                    </div>
                    <div className="icons">
                        <i><FaGithub /></i>
                        <i><FaLinkedin /></i>
                        <i><FaTwitter /></i>
                        <i><FaFacebook /></i>
                    </div>
                    <div className="cancel center">
                        <i><FaTimes /></i>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
import React, { useState } from "react";
import { Link } from "react-router-dom";


const SliderBar = () => {
    const [isActive, setIsActive] = useState(false);
    const showSliderBar = () => {
        if (!isActive) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }


    return (
        <>
            <div className={!isActive ? "sidebar" : "sidebar open"} >
                <div className="logo-details">
                    <i className="bx bxl-c-plus-plus icon" />
                    <div className="logo_name">CodingLab</div>
                    <i className={!isActive ? "bx bx-menu" : "bx bx-menu-alt-right"} id="btn" onClick={showSliderBar} />
                </div>
                <ul className="nav-list">
                    <li>
                        <i className="bx bx-search" onClick={showSliderBar} />
                        <input type="text" placeholder="Search..." />
                        <span className="tooltip">Search</span>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <i className="bx bx-grid-alt" />
                            <span className="links_name">Dashboard</span>
                        </Link>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <Link to="/dashboard/user">
                            <i className="bx bx-user" />
                            <span className="links_name">User</span>
                        </Link>
                        <span className="tooltip">User</span>
                    </li>
                    <li>
                        <Link to="/dashboard/teacher">
                            <i className="bx bx-group" />
                            <span className="links_name">Teacher</span>
                        </Link>
                        <span className="tooltip">Teacher</span>
                    </li>
                    <li>
                        <Link to="/c">
                            <i className="bx bx-pie-chart-alt-2" />
                            <span className="links_name">Analytics</span>
                        </Link>
                        <span className="tooltip">Analytics</span>
                    </li>
                    <li>
                        <Link to="_">
                            <i className="bx bx-folder" />
                            <span className="links_name">File Manager</span>
                        </Link>
                        <span className="tooltip">Files</span>
                    </li>
                    <li>
                        <Link to="_">
                            <i className="bx bx-cart-alt" />
                            <span className="links_name">Order</span>
                        </Link>
                        <span className="tooltip">Order</span>
                    </li>
                    <li>
                        <Link to="_">
                            <i className="bx bx-heart" />
                            <span className="links_name">Saved</span>
                        </Link>
                        <span className="tooltip">Saved</span>
                    </li>
                    <li>
                        <Link to="_">
                            <i className="bx bx-cog" />
                            <span className="links_name">Setting</span>
                        </Link>
                        <span className="tooltip">Setting</span>
                    </li>
                    <li className="profile">
                        <div className="profile-details">
                            <img src="https://w0.peakpx.com/wallpaper/19/741/HD-wallpaper-assassins-creed-asasin-asasins-creed-assassins-creed.jpg" alt="profileImg" />
                            <div className="name_job">
                                <div className="name">James</div>
                                <div className="job">Web designer</div>
                            </div>
                        </div>
                        <i className="bx bx-log-out" id="log_out" />
                    </li>
                </ul>
            </div>
            {/* <section className="home-section">
                <div className="text">Dashboard</div>
            </section> */}
        </>

    )
};
export default SliderBar;
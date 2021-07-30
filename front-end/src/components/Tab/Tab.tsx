import React from "react";
import { FiHome } from "react-icons/fi";
import "./Tab.style.scss";

const Tab = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="tabs_wrapper">
                        <input type="radio" name="tabs" id="tab_1" defaultChecked />
                        <label className="tab" htmlFor="tab_1">
                            <span className="material-icons"> code </span>
                            <span className="title">Code</span>
                        </label>
                        <input type="radio" name="tabs" id="tab_2" />
                        <label className="tab" htmlFor="tab_2">
                            <span className="material-icons"> drive_file_rename_outline </span>
                            <span className="title">About</span>
                        </label>
                        <input type="radio" name="tabs" id="tab_3" />
                        <label className="tab" htmlFor="tab_3">
                            <span className="material-icons"> stacked_bar_chart </span>
                            <span className="title">Services</span>
                        </label>
                        <input type="radio" name="tabs" id="tab_4" />
                        <label className="tab" htmlFor="tab_4">
                            <span className="material-icons">mail_outline</span>
                            <span className="title">Contact</span>
                        </label>
                        <span className="shape" />
                    </div>
                </div>
                {/* Vishal Sondarva contact: +91 9624805595 */}
            </section>

        </>
    )
};
export default Tab;
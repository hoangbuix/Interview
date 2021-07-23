import React from "react";
import "./MemberHomeList.style.scss";

const MemberHomeList = () => {
    return (
        <>
            <div className="wrapper-member-home">
                {/* <label className="dropdown"> */}
                <div className="dd-button">
                    Giáo vien
                </div>
                <input type="checkbox" className="dd-input" id="test" />
                <ul className="">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                    <li className="divider" />
                    <li>
                        <a href="/">Link to Rane.io</a>
                    </li>
                </ul>
                {/* </label> */}

            </div>
        </>
    )
};
export default MemberHomeList;
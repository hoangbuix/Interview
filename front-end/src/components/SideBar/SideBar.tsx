import React from "react";
import { Link } from "react-router-dom";
import { SideBar_Item } from "../../constains/paths";
import "./SideBar.style.scss";
import SideBarItem from "./SideBarItem";

const SideBar = (props: any) => {
    const activeItem = SideBar_Item.findIndex(item => item.route === props.location.pathname)
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={''} alt="company logo" />
            </div>
            {
                SideBar_Item.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SideBarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
};
export default SideBar;
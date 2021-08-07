import React from "react";
import { Link } from "react-router-dom";
import DropDown from "../Dropdown/DropDown";
import "./TopNav.style.scss";
import notifications from '../../constains/notification.json'
import user_menu from '../../constains/user_menus.json'
import ThemeMenu from "../ThemeMenu/ThemeMenu";

const curr_user = {
    display_name: 'Tuat Tran',
    image: ''
}

const renderNotificationItem = (item: any, index: number) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user: any) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item: any, index: number) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)
const TopNav = () => {
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <DropDown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item: any, index: number) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="topnav__right-item">
                    <DropDown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item: any, index: number) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    )
};
export default TopNav;
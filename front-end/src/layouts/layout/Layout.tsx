import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import TopNav from "../../components/TopNav/TopNav";
import Routes from "../../routes/Routes";
import "./Layout.style.scss";

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout `}>
                    <SideBar {...props} />
                    <div className="layout__content">
                        <TopNav />
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )} />
        </BrowserRouter>
    )
};
export default Layout;
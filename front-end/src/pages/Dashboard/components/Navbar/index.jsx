import React from "react";
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Charts from "../Chart/index";
import CompanyTable from "../Tabale/CompanyTable";
import ReportTable from "../Tabale/report";
import UserTable from "../Tabale/UserTable";


const routes = [
    {
        title:'Trang chủ',
        path: "/quan-tri",
        exact: true,
        icon: <AiIcons.AiFillHome />,
        sidebar: () => <div>home!</div>,
        main: () => <Charts />
    },
    {
        title:'Báo cáo',
        path: "/bao-cao",
        icon: <AiIcons.AiFillDatabase />,
        sidebar: () => <div>bubblegum!</div>,
        main: () => <CompanyTable />
    },
];

export default function Navbar() {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "40%",
                        background: "#f0f0f0"
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        {routes.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} style={{ textDecoration: 'none' }}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                            // children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
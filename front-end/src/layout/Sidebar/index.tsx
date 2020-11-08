import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import * as FcIcons from "react-icons/fc"
import TeacherTable from "../../Pages/Dashboard/TeacherTable";
import "./Sidebar.scss";
import UserTable from "../../Pages/Dashboard/UserTable";


const routes = [
    {
        path: "/",
        exact: true,
        main: () => <h2>Home</h2>
    },
    {
        path: "/teacher",
        main: () => <TeacherTable />
    },
    {
        path: "/user",
        main: () => <UserTable />
    }
];

const Sidebar: React.FC = () => {
    return (
        <Router>
            <div className="container-sidebar">
                <div className="wrapper-sidebar">
                    <div className="wrapper-menu">
                        <div className="nav-menu">
                            <ul style={{ padding: "5px" }}>
                                <li style={{ padding: "5px" }}>
                                    <FcIcons.FcHome size={24} style={{ paddingRight: "10px" }} />
                                    <Link to={`/`}>Dashboard</Link>
                                </li>
                                <li style={{ padding: "5px" }}>
                                    <FcIcons.FcDebt size={24} style={{ paddingRight: "10px" }} />
                                    <Link to={`/teacher`}>Giáo viên</Link>
                                </li>
                                <li style={{ padding: "5px" }}>
                                    <FcIcons.FcManager size={24} style={{ paddingRight: "10px" }} />
                                    <Link to={`/user`}>Người dùng</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-item">
                            <Switch>
                                {routes.map((route, index) => (
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
                    <div className="wrapper-item">
                    <h3>A</h3>
                </div>
                </div>
            </div>
        </Router>
    )
};

export default Sidebar;
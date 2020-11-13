import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Sidebar.scss";
import * as FcIcons from "react-icons/fc"
import Chart from "../Chart";
import UserTable from "../Table/UserTable";
import ReportTable from "../Table/ReportTable";
import TeacherTable from "../Table/TeacherTable";


const routes = [
    {
        path: "/admin",
        exact: true,
        main: () => <Chart />
    },
    {
        path: "/teacher",
        main: () => <TeacherTable />
    },
    {
        path: "/user",
        main: () => <UserTable />
    },
    {
        path: "/report",
        main: () => <ReportTable />
    }
];

const Sidebar: React.FC = () => {
    const [show, setShow] = React.useState<Boolean>(false)
    return (
        <Router>
            <div className="container-sidebar">
                <div className="wrapper-sidebar">
                    <div className="wrapper-menu">
                        <div className="nav-menu" onClick={() => setShow(true)}>
                            <ul className="nav-item-menu"  >
                                <li className="nav-item-list">
                                    <span><FcIcons.FcHome size={21} /> Dashboard</span>
                                    {/* <Link to={`/admin`}>Dashboard</Link> */}
                                </li>
                                <li className="nav-item-list">
                                    <FcIcons.FcDebt size={21} />
                                    <Link to={`/teacher`}>Giáo viên</Link>
                                </li>
                                <li className="nav-item-list">
                                    <FcIcons.FcManager size={21} />
                                    <Link to={`/user`}>Người dùng</Link>
                                </li>
                                <li className="nav-item-list">
                                    <FcIcons.FcRotateToPortrait size={21} />
                                    <Link to={`/report`}>Báo cáo</Link>
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
                                        children={route.main}
                                    />
                                ))}
                            </Switch>
                        </div>
                    </div>
                    <div className={show ? "wrapper-item" : "close"}>
                        <div className="search-item">
                            <input type="text" placeholder="Tìm kiếm ..." />
                            <button>
                                <FcIcons.FcSearch size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
};

export default Sidebar;
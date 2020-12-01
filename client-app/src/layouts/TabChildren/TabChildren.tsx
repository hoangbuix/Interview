import React from "react";
import { Link, Route, BrowserRouter, Switch, useRouteMatch } from "react-router-dom";
import CompanyTable from "../Table/CompanyTable/CompanyTable";
import ReportTable from "../Table/ReportTable/ReportTable";
import TeacherTable from "../Table/TeacherTable/TeacherTable";
import UserTable from "../Table/UserTable/UserTable";
import "./styles.css";

const routes = [
    {
        path: "/user",
        exact: true,
        main: () => <UserTable />
    },
    {
        path: "/teacher",
        exact: true,
        main: () => <TeacherTable />
    },
    {
        path: "/report",
        exact: true,
        main: () => <ReportTable />
    },
    {
        path: "/company",
        exact: true,
        main: () => <CompanyTable />
    }
]

const TabChildren: React.FC = () => {
    const { url, path } = useRouteMatch();
    React.useEffect(() => {
        // console.log(url, path)

    }, [url, path])
    return (
        <BrowserRouter>
            <div className="container-tabchildren">
                <nav>
                    <ul className="tabchildren-menu">
                        <li className="tabchildren-item"><Link to={`${url}/teacher`}>Giáo viên</Link></li>
                        <li className="tabchildren-item"><Link to={`${url}/user`}>Người dùng</Link></li>
                        <li className="tabchildren-item"><Link to={`${url}/report`}>Báo cáo</Link></li>
                        <li className="tabchildren-item"><Link to={`${url}/company`}>Công ty</Link></li>
                    </ul>
                </nav>
                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={`${path + route.path}`}
                                exact={route.exact}
                                render={route.main}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default TabChildren;
import React from "react";
import "./styles.scss";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { UserTable } from "../Tables";
import TeacherTable from "../Tables/TeacherTable";

const routes = [
    {
        name: "A",
        path: "/a",
        exact: true,
        main: () => <h4>A</h4>
    },
    {
        name: "B",
        path: "/b",
        main: () => <h4>B</h4>
    },
    {
        name: "C",
        path: "/c",
        main: () => <h4>C</h4>
    },
    {
        name: "D",
        path: "/d",
        main: () => <h4>D</h4>
    },
    {
        name: "Teacher",
        path: "/teacher-table",
        main: () => <TeacherTable />
    },
    {
        name: "User",
        path: "/user-table",
        main: () => <UserTable />
    },
]

const TabChildren: React.FC = () => {
    const { path, url } = useRouteMatch();

    const [activeTab, setActiveTab] = React.useState(0);
    React.useEffect(() => {
        isActive(activeTab)
    }, [activeTab, path, url])
    const isActive = (id: number) => {
        let index = 0;
        return id >= index ? setActiveTab(id) : null;
    }
    return (
        <div className="container-tabchildren">
            <div className="wrapper-tabchildren">
                <ul className="tabchildren-menu">
                    {
                        routes?.map((item, index) => (
                            <li key={index} onClick={() => isActive(index)} className={activeTab === index ? "tabchildren-item activeTabChildren" : "tabchildren-item"}>
                                <Link to={`${url + item.path}`} >{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="tabchildren-main">
                    <Switch >
                        {
                            routes?.map((item, index) => (
                                <Route key={index}
                                    exact={item.exact}
                                    path={path + item.path}
                                    children={<item.main />}
                                />
                            ))
                        }
                    </Switch>
                </div>
            </div>
        </div>
    )
};


export default TabChildren;
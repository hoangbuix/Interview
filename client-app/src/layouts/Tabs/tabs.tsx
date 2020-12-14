import React from "react";
import "./styles.scss";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import TabChildren from "../TabChildren";
import Chart from "../Chart";
import { Counter } from "../../redux/features/photo";


const routes = [
    {
        name: "Dashboard",
        path: "/aa",
        exact: true,
        main: () => <h4>A</h4>
    },
    {
        name: "Chart",
        path: "/bb",
        main: () => <Chart />
    },
    {
        name: "C",
        path: "/cc",
        main: () => <Counter />
    },
    {
        name: "Table",
        path: "/dd",
        main: () => <TabChildren />
    },
]

const Tab: React.FC = () => {
    const { path } = useRouteMatch();
    const [activeTab, setActiveTab] = React.useState(0);

    const isActive = (id: number) => {
        let index = 0;
        return id >= index ? setActiveTab(id) : null;
    }
    return (
        <div className="container-tab">
            <div className="wrapper-tab">
                <ul className="wrapper-tab-menu">
                    {
                        routes.map((item, index) => (
                            <li key={index} onClick={() => isActive(index)} className={activeTab === index ? "wrapper-tab-item activeTabs" : "wrapper-tab-item"}><Link to={path + item.path} >{item.name}</Link></li>
                        ))
                    }
                </ul>
                <div >
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={path + route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </div>
    )
};
export default Tab;
import React from "react";
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Chart from "../Chart/Chart";

// import useOnClickOutside from "../../hooks/useOnClickOutside";
import TabChildren from "../TabChildren/TabChildren";
import TrafficeInner from "../TrafficInner/TrafficInner";
// import UserTable from "../Table/UserTable/UserTable";
import "./styles.css";

const routes = [
    {
        path: "/dashboard",
        exact: true,
        main: () => <TrafficeInner />
    },
    {
        path: "/chart",
        exact: true,
        main: () => <Chart />
    },
    {
        path: "/table",
        exact: true,
        main: () => <TabChildren />
    }
]

const Tab: React.FC = () => {

    const [show, setShow] = React.useState<boolean>(false);
    const [active, setActive] = React.useState<boolean>(true)
    const handlClickTabChildren = () => setShow(!show)

    const { url, path } = useRouteMatch();
    React.useEffect(() => {
        // console.log(url, path)
    }, [url, path])
    return (
        <BrowserRouter>
            <div className="warpper-tab">
                <div className="container-tab">
                    <nav >
                        <ul className="tab-menu" >
                            <li className="tab-item"><Link to={`${url}/dashboard`} >Dashboard</Link></li>
                            <li className="tab-item"><Link to={`${url}/chart`}>Chart</Link></li>
                            <li className="tab-item" onClick={handlClickTabChildren}><Link to={`${url}/table`}>Table</Link></li>
                        </ul>
                    </nav>
                </div>
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



export default Tab;
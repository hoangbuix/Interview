import React from "react";
import "./DashboardLayout.style.scss";
import SliderBar from "../../components/SliderBar/SliderBar";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";
import User from "./User/User";
import Teacher from "./Teacher/Teacher";
import { useEffect } from "react";
import BarChart from "./Chart/BarChart";



const routes = [
    {
        path: "/",
        exact: true,
        main: () => <BarChart />
    },
    {
        path: "/user",
        main: () => <User />
    },
    {
        path: "/teacher",
        main: () => <Teacher />
    }];

const DashboardLayout = () => {
    let { url, path } = useRouteMatch();
    useEffect(() => { }, [url, path])

    return (
        <Router>
            <SliderBar />
            <section className="home-section">
                <div className="text" >Dashboard</div>
                <div className="gird wide">
                    <Switch >
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={path + route.path}
                                exact={route?.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </section>
        </Router>
    )
};

export default DashboardLayout;
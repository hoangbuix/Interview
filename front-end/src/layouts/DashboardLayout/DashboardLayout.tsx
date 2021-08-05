import React, { useEffect } from "react";
import "./DashboardLayout.style.scss";
import SliderBar from "../../components/SliderBar/SliderBar";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";
import DashboardPath from "../../constains/paths";





const DashboardLayout = () => {
    let { path } = useRouteMatch();
    useEffect(() => { }, [, path])

    return (
        <Router>
            <SliderBar />
            <section className="home-section">
                <div className="text" >Dashboard</div>
                <div className="gird wide">
                    <Switch >
                        {DashboardPath.map((route, index) => (
                            <Route
                                key={index}
                                path={path + route.path}
                                exact={route?.exact}
                                children={<route.component />}
                            />
                        ))}
                    </Switch>
                </div>
            </section>
        </Router>
    )
};

export default DashboardLayout;
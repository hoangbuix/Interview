import React from "react";
import "./DashboardLayout.style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SliderBar from "../../components/SliderBar/SliderBar";
import DashboardPath from "../../constains/paths";





const DashboardLayout = () => {

    return (
        <>
            <Router>
                <SliderBar />
                <section className="home-section">
                    <div className="text" >Dashboard</div>
                    <div className="gird wide">
                        <Switch >
                            {DashboardPath.map((route, index) => (
                                <Route
                                    key={index}
                                    path={'/dashboard' + route.path}
                                    exact={route?.exact}
                                    children={<route.component />}
                                />
                            ))}
                        </Switch>
                    </div>
                </section>
            </Router>
        </>
    )
};

export default DashboardLayout;
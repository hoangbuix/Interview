import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
// import { Counter } from "../redux/features/photo";

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/admin" component={Dashboard} />
                <Route path="/sign-in" component={SignIn} />
            </Switch>
        </Router>
    )
};

export default Routes;
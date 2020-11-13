import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/HomePage";
import SignIn from "../Pages/SignIn";

const Routes: React.FC = () => {
    return (
        <Switch>
            < Route exact path={["/", '/home']} component={Home} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/sign-in" component={SignIn} />
        </Switch >
    )
};

export default Routes;
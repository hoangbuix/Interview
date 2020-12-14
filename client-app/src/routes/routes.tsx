import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/admin" component={Admin} />
                <Route path="/sign-in" component={SignIn} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
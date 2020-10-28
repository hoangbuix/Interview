import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import DashboardPage from "../pages/Dashboard";
import Homepage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFount";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
// import PublicRoute from "./publicRoute";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/dang-nhap" component={SignInPage}/>
            <Route path="/dang-ky" component={SignUpPage}/>
            <PrivateRoute isPrivate={true} path="/quan-tri" component={DashboardPage} />
            <Route path="*" component={NotFoundPage} />
         </Switch>
    )
}
export default Routes;

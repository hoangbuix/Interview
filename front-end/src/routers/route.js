import React from "react";
import { Switch, Route } from "react-router-dom";
// import PrivateRoute from "../routers/praviteRoute";
import DashboardPage from "../pages/Dashboard";
// import ReportTable from "../pages/Dashboard/components/Tabale/report";
import Homepage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFount";
import SignInPage from "../pages/SignInPage";
// import PublicRoute from "./publicRoute";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/quan-tri" component={DashboardPage} />
            <Route path="/dang-nhap" component={SignInPage}/>
            {/* <Route path="/bao-cao" component={ReportTable}/> */}
            {/* <PublicRoute path="/dang-nhap" component={SignInPage} /> */}
            <Route path="*" component={NotFoundPage} />
         </Switch>
    )
}
export default Routes;

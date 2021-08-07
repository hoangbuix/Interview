import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Customers from "../pages/Customer";
import Dashboard from "../pages/Dashboard/Dashboard";
// import DashboardRoutes from "./DashboardRoute";
// import HomeRoutes from "./HomeRoute";
// import LoginRoutes from "./LoginRoute";
// import ProfileRoutes from "./ProfileRoute";
// import RegisterRoutes from "./RegisterRoute";
// import ReportRoutes from "./ReportRoute";

export default function Routes() {
  return (
    // <BrowserRouter>
    //   <LoginRoutes />
    //   <RegisterRoutes />
    //   <HomeRoutes />
    //   <ProfileRoutes />
    //   <ReportRoutes />
    //   <DashboardRoutes />
    // </BrowserRouter>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/customers' component={Customers} />
      </Switch>
    </BrowserRouter>
  )
}
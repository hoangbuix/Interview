import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Login from "../pages/Login/Login";
import HomeRoute from "./HomeRoute";

export default function Routes() {
    return (
        <BrowserRouter>
            <HomeRoute />
            {/* <Login /> */}
        </BrowserRouter>
    )
}
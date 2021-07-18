import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./HomeRoute";
import LoginRoute from "./LoginRoute";

export default function Routes() {
  return (
    <BrowserRouter>
      <LoginRoute />
      <HomeRoutes />
    </BrowserRouter>
  )
}
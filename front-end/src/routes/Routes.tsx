import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./HomeRoute";
import LoginRoutes from "./LoginRoute";
import ProfileRoutes from "./ProfileRoute";
import RegisterRoutes from "./RegisterRoute";
import ReportRoutes from "./ReportRoute";

export default function Routes() {
  return (
    <BrowserRouter>
      <LoginRoutes />
      <RegisterRoutes />
      <HomeRoutes />
      <ProfileRoutes />
      <ReportRoutes />
    </BrowserRouter>
  )
}
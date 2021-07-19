import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./HomeRoute";
import LoginRoutes from "./LoginRoute";
import ProfileRoutes from "./ProfileRoute";

export default function Routes() {
  return (
    <BrowserRouter>
      <LoginRoutes />
      <HomeRoutes />
      <ProfileRoutes />
    </BrowserRouter>
  )
}
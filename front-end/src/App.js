import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from "./hooks/auth";
import Routes from "./routers/route";


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </Router>
  );
}

export default App;

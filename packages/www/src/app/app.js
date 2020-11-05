import React from "react";
import { Router } from "@reach/router";
import Dashboard from "./Todo";
import Login from "./login";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  console.log("This is app/app.js");
  return (
    <Router>
      <PublicRoute path="/" />
    </Router>
  );
};

export default App;

import React, { useContext } from "react";
import { Router } from "@reach/router";
import { navigate } from "gatsby";
import { UserContext } from "./components/identity-context";
import Dashboard from "./Todo";
import Login from "./components/Login";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  console.log("This is app/app.js");
  const { user, netlifyIdentity } = useContext(UserContext);
  console.log("user is \n", user);
  // if (user && typeof window !== "undefined") {
  //   navigate("/app");
  // }
  return <Login identity={netlifyIdentity} />;
};

export default App;

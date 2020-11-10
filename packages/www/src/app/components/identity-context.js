import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const UserContext = createContext({ user: {} });

const IdentityProvider = ({ children }) => {
  // if (
  //   typeof netlifyIdentity.init !== "undefined" &&
  //   typeof window !== "undefined"
  // ) {
  //   netlifyIdentity.init();
  // }
  // const user = netlifyIdentity.currentUser();
  // console.log(`user at identity-context is\n`, user);
  // const [loggedInUser, setUser] = useState({ user });
  const [loggedInUser, setUser] = useState();
  useEffect(() => {
    netlifyIdentity.init();
  });
  netlifyIdentity.on("login", (user) => {
    console.log("logging in");
    netlifyIdentity.close();
    setUser(user);
  });
  netlifyIdentity.on("logout", () => {
    console.log("logging out");
    netlifyIdentity.close();
    setUser();
  });
  return (
    // Pass user state as value to context.Provider so it can be consumed by context.Consumer
    <UserContext.Provider value={{ netlifyIdentity, user: loggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, IdentityProvider };

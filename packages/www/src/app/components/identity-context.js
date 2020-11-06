import React, { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const UserContext = createContext({ user: {} });

// const IdentityProvider = (props) => {
//   const [user, setUser] = useState();
//   React.useEffect(() => {
//     netlifyIdentity.init({});
//   });

//   netlifyIdentity.on("init", (user) => {
//     console.log("initializing authentication service");
//     setUser(user);
//   });
//   const _user = netlifyIdentity.currentUser();
//   console.log(`User is \n`, _user);

//   return (
//     <UserContext.Provider value={{ identity: netlifyIdentity, user }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

const IdentityProvider = ({ children }) => {
  // console.log("This is wrap root element");
  // const user = netlifyIdentity.currentUser();
  // console.log(user);
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

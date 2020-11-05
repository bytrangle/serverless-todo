import React, { useContext } from "react";
import { Router, Link } from "@reach/router";
import { navigate } from "gatsby";
import { Container, Flex, Heading, Button, NavLink } from "theme-ui";
import { UserContext } from "../../identity-context";
import Todo from "../app/Todo";

let DashLoggedOut = (props) => {
  const { user, identity: netlifyIdentity } = useContext(UserContext);
  return (
    <Flex>
      <Flex>
        <NavLink as={Link} to="/" p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to={"/app"} p={2}>
          Dashboard
        </NavLink>
        {user && (
          <NavLink href="#!" p={2}>
            {user.user_metadata.full_name}
          </NavLink>
        )}
      </Flex>
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Get Stuff Done</Heading>
        <Button sx={{ marginTop: 2 }} onClick={() => netlifyIdentity.open()}>
          Log In
        </Button>
      </Flex>
    </Flex>
  );
};

export default () => {
  const { user, netlifyIdentity } = useContext(UserContext);
  if (!user) {
    navigate("/");
    return null;
  }
  return (
    <Container>
      <Flex sx={{ alignItems: "center" }}>
        <h1 style={{ marginRight: "2rem" }}>
          Hello, {user.user_metadata.full_name}
        </h1>
        <Button
          onClick={() => {
            netlifyIdentity.logout();
            navigate("/");
          }}
        >
          Log Out
        </Button>
      </Flex>
      <Todo />
    </Container>
  );
};

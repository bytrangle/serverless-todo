import React, { useContext, useEffect } from "react";
import { Router, Redirect } from "@reach/router";
import { navigate } from "gatsby";
import { Container, Flex, Heading, Button, NavLink } from "theme-ui";
import { UserContext } from "../app/components/identity-context";
import Todo from "../app/Todo";

export default () => {
  const { user, netlifyIdentity } = useContext(UserContext);
  console.log(`user is ${user}`);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  // if (!user) return <Redirect to="/" />;
  return (
    <Container>
      <Flex sx={{ alignItems: "center" }}>
        <h1 style={{ marginRight: "2rem" }}>
          Hello, {user?.user_metadata?.full_name}
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
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/");
  //     return null;
  //   }
  // });
};

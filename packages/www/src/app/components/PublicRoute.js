import React, { useContext, useEffect } from "react";
import { Redirect } from "@reach/router";
import { navigate } from "gatsby";
import { Container, Heading, Button } from "theme-ui";
import { UserContext } from "./identity-context";

const PublicRoute = () => {
  console.log("This is public route");
  const { user, netlifyIdentity } = useContext(UserContext);
  console.log(user);
  useEffect(() => {
    if (user) {
      navigate("/app");
    }
  });
  // if (user) return <Redirect to="/app" />;
  return (
    <Container p={4} sx={{ textAlign: "center" }}>
      <Heading as="h1" sx={{ fontSize: "72px" }}>
        Get Nothing Done
      </Heading>
      <Button
        sx={{ marginTop: 2 }}
        onClick={() => {
          netlifyIdentity.open();
        }}
      >
        Log In / Register
      </Button>
    </Container>
  );
};

export default PublicRoute;

import React from "react";
import { Container, Heading, Button } from "theme-ui";

const Login = ({ identity }) => {
  return (
    <Container p={4} sx={{ textAlign: "center" }}>
      <Heading as="h1" sx={{ fontSize: "72px" }}>
        Get Nothing Done
      </Heading>
      <Button
        sx={{ marginTop: 2 }}
        onClick={() => {
          identity.open();
        }}
      >
        Log In / Register
      </Button>
    </Container>
  );
};

export default Login;

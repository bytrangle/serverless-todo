import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apollo/client";
import { ThemeProvider } from "theme-ui";
import { deep } from "@theme-ui/presets";
import { IdentityProvider } from "./src/app/components/identity-context";

const tokens = {
  ...deep,
  sizes: { container: 1024 },
};

// module.exports = ({ element }) => (
//   <Provider>
//     <ThemeProvider theme={tokens}>{element}</ThemeProvider>
//   </Provider>
// );
export const wrapRootElement = ({ element }) => (
  <IdentityProvider>
    <ThemeProvider theme={tokens}>{element}</ThemeProvider>
  </IdentityProvider>
);

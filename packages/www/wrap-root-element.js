// const React = require("react");
// const { ApolloProvider } = require("@apollo/client");
// const { ThemeProvider } = require("theme-ui");
// const { deep } = require("@theme-ui/presets");
// const { client } = require("./src/apollo/client");
// // const { Provider } = require("./identity-context");
// const { Provider } = require("./identity-context");
// const tokens = {
//   ...deep,
//   sizes: { container: 1024 },
// };

// module.exports = ({ element }) => (
//   <ApolloProvider client={client}>
//     <Provider>
//       <ThemeProvider theme={tokens}>{element}</ThemeProvider>
//     </Provider>
//   </ApolloProvider>
// );
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "theme-ui";
import { deep } from "@theme-ui/presets";
import { client } from "./src/apollo/client";
import { Provider } from "./identity-context";

const tokens = {
  ...deep,
  sizes: { container: 1024 },
};

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <Provider>
      <ThemeProvider theme={tokens}>{element}</ThemeProvider>
    </Provider>
  </ApolloProvider>
);

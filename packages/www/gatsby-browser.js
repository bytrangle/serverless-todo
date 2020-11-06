import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apollo/client";
import { setContext } from "apollo-link-context";
import netlifyIdentity from "netlify-identity-widget";
import { wrapRootElement as wr } from "./wrap-root-element";

export const wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{wr({ element })}</ApolloProvider>;
};

import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "node-fetch";
// import { client } from "./src/apollo/client";
import { setContext } from "apollo-link-context";
import netlifyIdentity from "netlify-identity-widget";
import { wrapRootElement as wr } from "./wrap-root-element";

const authLink = setContext((_, { headers }) => {
  const user = netlifyIdentity.currentUser();
  const token = user.token.access_token;
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = new HttpLink({
  uri: "https://amazing-lamport-5affea.netlify.app/.netlify/functions/graphql",
  fetch,
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: authLink.concat(httpLink),
  link: httpLink,
});

export const wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{wr({ element })}</ApolloProvider>;
};

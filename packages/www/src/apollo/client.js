const { ApolloClient, InMemoryCache, HttpLink } = require("@apollo/client");
const { setContext } = require("apollo-link-context");
const fetch = require("node-fetch");
const netlifyIdentity = require("../../identity-context");

const authLink = setContext((_, { headers }) => {
  const user = netlifyIdentity.currentUser();
  const token = user.token.access_token;
  // return the headers to the context so httplink can read them
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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

exports.client = client;

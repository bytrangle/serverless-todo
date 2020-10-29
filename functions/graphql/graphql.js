const { ApolloServer, gql } = require("apollo-server-lambda");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    todos: [Todo]!
  }
  type Todo {
    id: ID!
    text: String!
    done: Boolean!
  }
  type Mutation {
    addTodo(text: String!): Todo
    updateTodoDone(id: ID!): Todo
  }
`;

const todos = {};
let todoIndex = 0;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    todos: () => {
      return Object.values(todos);
    },
  },
  Mutation: {
    addTodo: (_, { text }) => {
      todoIndex++;
      const id = `key-${todoIndex}`;
      todos[id] = { id, text, done: false };
      return todos[id];
    },
    updateTodoDone: (_, { id }) => {
      todos[id].done = true;
      return todos[id];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  cors: {
    credentials: true,
    origin: (origin, callback) => {
      const whitelist = ["https://localhost:8000"];

      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  },
});

// exports.handler = server.createHandler({
//   cors: {
//     origin: "http://localhost:8000",
//     allowedHeaders: ["Content-Type", "Origin", "Accept"],
//     credentials: true,
//   },
// });
exports.handler = server.createHandler();

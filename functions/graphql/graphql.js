const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require("faunadb");

const q = faunadb.query;
var client = new faunadb.Client({ secret: process.env.FAUNA });
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
    todos: async (parent, args, { user }) => {
      if (!user) return [];
      return Object.values(todos);
      // const results = await client.query(
      //   q.Paginate(q.Match(q.Index("todos_by_user"), user))
      // );
      // return results.data.map(([ref, text, done]) => ({
      //   id: ref.id,
      //   text,
      //   done,
      // }));
    },
  },
  Mutation: {
    addTodo: (_, { text }) => {
      todoIndex++;
      const id = `key-${todoIndex}`;
      todos[id] = { id, text, done: false };
      return todos[id];
    },
    // addTodo: async (_, { text }, { user }) => {
    //   if (!user) throw new Error("Must be authenticated");
    //   const results = await client.query(
    //     q.Create(q.Collection("todos"), {
    //       data: {
    //         text,
    //         done: false,
    //         owner: user,
    //       },
    //     })
    //   );
    //   return {
    //     ...results.data,
    //     id: results.ref.id,
    //   };
    // },
    updateTodoDone: (_, { id }) => {
      todos[id].done = true;
      return todos[id];
      // const results = await client.query(
      //   q.Update(q.Ref(q.Collection("todos"), id), {
      //     data: {
      //       done: true,
      //     },
      //   })
      // );
      // return {
      //   ...results.data,
      //   id: results.ref.id,
      // };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ context }) => {
    if (context.clientContext.user) {
      return { user: context.clientContext.user.sub };
    } else {
      return {};
    }
  },
  playground: true,
  introspection: true,
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});

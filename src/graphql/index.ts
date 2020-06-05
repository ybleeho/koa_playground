import {ApolloServer, gql } from 'apollo-server-koa';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

export const apolloServer = new ApolloServer({ typeDefs, resolvers });

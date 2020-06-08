import app from './app';
import Db from './database';
import {ApolloServer, gql } from 'apollo-server-koa';

const typeDefs = gql`
  type Query {
    id: ID,
    hello: String
    age: Int
    getUser(id: ID): User
  }
  type User {
    id: ID, 
    name: String
    createdAt: String
  }
  type Mutation {
    getUser(id: ID): User
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        id: () => '5ede1cf69cab8b8c96b7cc8b',
        hello: () => 'Hello world!',
        age: () => 24,
        getUser: (parent, args) => {
            console.log({parent, args})
            return {
                "id": "5ede1cf69cab8b8c96b7cc8b",
                "name": "lee ho",
                "createdAt": "2020-06-08T11:11:50.407Z"
            }
        }
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 3000;

Db.connect().then();
apolloServer.applyMiddleware({ app: app, path: '/graphql'});
app.listen(port);
console.info(`Listening to http://localhost:${port} 🚀`);

import app from './app';
import Db from './database';
import {ApolloServer, gql} from 'apollo-server-koa';
import {Client} from "elasticsearch";
import User from '@models/User'

const typeDefs = gql`
    type Query {
        _id: ID,
        hello: String
        age: Int
        getUser(_id: ID): User
    }
    type User {
        _id: ID,
        name: String
        createdAt: String
    }
    type Mutation {
        createUser(name: String): User
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        _id: () => '5ede1cf69cab8b8c96b7cc8b',
        hello: () => 'Hello world!',
        age: () => 24,
        getUser: (parent, args) => {
            console.log({parent, args})
            return {
                "_id": "5ede1cf69cab8b8c96b7cc8b",
                "name": "lee ho",
                "createdAt": "2020-06-08T11:11:50.407Z"
            }
        }
    },
    Mutation: {
        createUser: async (_, { name }, { dataSources }) => {
            return await User.create({name})
        }
    }
};

const apolloServer = new ApolloServer({typeDefs, resolvers});

const port = process.env.PORT || 3000;

const elasticClient = new Client({host: 'localhost:9200'})
elasticClient.ping({
    requestTimeout: 10000,
}).then(result => console.log(result))
Db.connect().then();
apolloServer.applyMiddleware({app: app, path: '/graphql'});
app.listen(port);
console.info(`Listening to http://localhost:${port} 🚀`);

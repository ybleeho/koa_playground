import 'dotenv/config';
import app from './app';
import database from "./database";
import {ApolloServer, gql} from 'apollo-server-koa';
import {Client} from "elasticsearch";

import resolvers from 'resolvers';
import schema from 'schema';

const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    tracing: true,
});

apolloServer.applyMiddleware({app: app, path: '/graphql'});

const elasticClient = new Client({host: 'localhost:9200'})
elasticClient.ping({
    requestTimeout: 10000,
}).then(result => console.log(result))

const port = process.env.PORT || 3333
const server = app.listen( port, () => console.info(`Listening to http://localhost:${port}/graphql 🚀`));

process.on("SIGINT", () => {
    console.info('SIGINT signal received.');
    server.close(() => {
        console.log('Http server closed.');
        database.close(() => {
            console.log('MongoDb connection closed.');
            process.exit(0);
        })
    });
});

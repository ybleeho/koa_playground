import 'dotenv/config';
import app from './app';
import database from "./database";
import { ApolloServer } from 'apollo-server-koa';

import resolvers from './resolvers';
import schema from './schema';
import 'module-alias/register';

const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    tracing: true,
});

apolloServer.applyMiddleware({ app: app, path: '/graphql' });
const port = process.env.PORT || 3333;
const server = app.listen(port, () => console.info(`Listening to http://localhost:${port}/graphql 🚀`));

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

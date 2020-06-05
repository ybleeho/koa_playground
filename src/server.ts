import app from './app';
import Db from './database';
import {apolloServer} from 'graphql'
const port = process.env.PORT || 3000;

Db.connect().then();
apolloServer.applyMiddleware({ app: app, path: '/graphql'});
app.listen(port);
console.info(`Listening to http://localhost:${port} 🚀`);

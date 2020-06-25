import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from "koa-bodyparser";
import logger from 'koa-logger';
import {ApolloServer, gql} from "apollo-server-koa";

import UserRouter from '@routes/user';

const app = new Koa();
const router = new Router();

const typeDefs = gql`
    type Query {
        hello: String
        getAll: [User]
    }
    
    type User {
        name: String
        age: Int
        address: String
        number: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        getAll: () => [
            {
                "age": 32,
                "_id": "5ee5ff7d4ec650726b856ff1",
                "name": "huaaaa",
                "number": "1232132313",
                "address": "hongkou",
                "createdAt": "2020-06-14T10:44:13.725Z"
            },
            {
                "age": 0,
                "_id": "5ee5e6e0879aa949124cf385",
                "name": "hua",
                "createdAt": "2020-06-14T08:59:12.707Z"
            }
        ]
    },
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,

});

router.get("/graphql", apolloServer.getMiddleware());
router.post("/graphql", apolloServer.getMiddleware());
router.use(logger())
router.use(bodyParser())

router.get('/', (ctx: Koa.Context) => {
    ctx.body = 'Hello World!';
});

router.use('/users', UserRouter);

app.use(router.routes());
app.use(router.allowedMethods());

export default app;

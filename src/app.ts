import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from "koa-bodyparser";
import logger from 'koa-logger';
import {ApolloServer, gql} from "apollo-server-koa";

import UserRouter from '@routes/user';

const app = new Koa();
const router = new Router();

router.use(logger())
router.use(bodyParser())

router.get('/', (ctx: Koa.Context) => {
    ctx.body = 'Hello World!';
});

router.use('/users', UserRouter);

app.use(router.routes());
app.use(router.allowedMethods());

export default app;

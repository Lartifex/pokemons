'use strict';

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './router.js'
import cors from '@koa/cors'

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

const port = 3000;

app.listen(port);

console.log(`Server listening on port ${port}`); 
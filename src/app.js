import __babelPolyfill from "babel-polyfill";
import koa from "koa";
import routes from "koa-route";
import bodyParser from 'koa-bodyparser';

import * as yak from "./web/yak";
import * as facebookAPI from "./api/facebook";

const app = new koa();
app.use(bodyParser());

app.use(routes.get("/yak", yak.index));
app.use(routes.get("/api/fb/webhook", facebookAPI.webhook_get));
app.use(routes.post("/api/fb/webhook", facebookAPI.webhook_post));

app.listen(9001);

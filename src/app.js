import __babelPolyfill from "babel-polyfill";
import koa from "koa";
import routes from "koa-route";

import * as facebookAPI from "./api/facebook";

const app = new koa();

app.use(routes.get("/webhook", facebookAPI.webhook));

app.listen(9001);

import __babelPolyfill from "babel-polyfill";
import koa from "koa";
import routes from "koa-route";

import * as testAPI from "./api/test";

const app = new koa();

app.use(routes.get("/test/:id", testAPI.hello));
app.use(routes.get("/test/world", testAPI.world));

app.listen(9001);

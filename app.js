const Koa = require('Koa');
const bodyParser = require('koa-bodyparser');
const PostR = require('./routes/Posts.routes');
const app = new Koa();
app.use(bodyParser());
app.use(PostR.routes()).use(PostR.allowedMethods());
app.use((ctx =>
    ctx.body = "Hello"));
app.listen(3000);
console.log("Ung dung dang chay o cong 3000");
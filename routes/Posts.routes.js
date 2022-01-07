const Router = require("@koa/router");
const{createPost,getPost,deletePost,updatePost} = require('../API/Posts.api');
const { getById } = require("../v1/Posts.dao");
const router = new Router({
    prefix:'/post'
})
router.get('/',async ctx => {
    ctx.body = await getPost();
})
router.post('/',async ctx => {
    let pr = ctx.request.body;
    pr = await createPost(pr);
    ctx.body = pr;
})
router.get('/:id',async ctx => {
    const id = ctx.params.id;
    await getById(id);
})
router.delete('/:id',async ctx => {
    const id = ctx.params.id;
    await deletePost(id);
})
router.put('/:id', async ctx => {
    const id = ctx.params.id;
    let pr = ctx.request.body;
    pr = await updatePost(id);
    ctx.body = Post;
    ctx.response.status = 200;
})
module.exports = router;
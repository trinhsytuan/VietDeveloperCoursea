const{save,getAll,getById,update,removeById} = require('../v1/Posts.dao');
const createPost = async({name,photos,address,friends,retionsip,follows}) => {
    const newtk = {
        name,photos,address,friends,retionsip,follows
    }
    return await save(newtk);
}
const getPost = async() => {
    return await getAll();
}
const updatePost = async(id,{name,photos,address,friends,retionsip,follows}) => {
    return await update(id,name,photos,address,friends,retionsip,followsh);
}
const deletePost = async (id) => {
    return await removeById(id);
}

module.exports = {
    createPost,getPost,deletePost,updatePost
}

const{save,getAll,getById,update,removeById} = require('../v1/Posts.dao');
const createPost = async({tentk,noidung,Anh}) => {
    const newtk = {
        tentk,
        noidung,
        Anh
    }
    return await save(newtk);
}
const getPost = async() => {
    return await getAll();
}

const updatePost = async(id,{tentk,noidung,anh}) => {
    return await update(id,tentk,noidung,anh);
}
const deletePost = async (id) => {
    return await removeById(id);
}

module.exports = {
    createPost,getPost,deletePost,updatePost
}

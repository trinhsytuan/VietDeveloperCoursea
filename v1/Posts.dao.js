const Post = require("../connectdb").db("myFirstDatabase").collection("baiviet");
const ObjectID = require('mongodb').ObjectId;
const save = async({name,photos,address,friends,retionsip,follows}) => {
    const result = await Post.insertOne({name,photos,address,friends,retionsip,follows});
    return result.ops[0];
}
const getAll = async() => {
    const cursor = await Post.find();
    return cursor.toArray();
}
const getById = async id => {
    return await Post.findOne({_id:ObjectID(id)});
}
const update = async(id, {name,photos,address,friends,retionsip,follows}) => {
    const result = await Post.replaceOne({_id:ObjectID(id)} , {name,photos,address,friends,retionsip,follows});
}
const removeById = async id => {
    await Post.deleteOne({_id:ObjectID(id)});
}
module.exports = {save,getAll,getById,update,removeById};
var User = require('../models/user');
var Car = require('../models/car');

module.exports = {
    getUserPosts,
    getPostDetail,
    getAllPosts,
    addComment
};

async function getUserPosts (req, res){
    var posts = await Car.find({sellerId : req.params.id})
        res.status(200).json(posts)
}
    
async function getAllPosts (req, res){
    var posts = await Car.find({})
        res.status(200).json(posts)
    
}
async function getPostDetail (req, res){
    var post = await Car.findOne({_id : req.params.id})
        res.status(200).json(post)
    
}
async function addComment (req, res) {
    await Car.findOne({_id : req.params.id}, function(err, post){
        post.comments.push(req.body)
        post.save()
    })
    res.status(200).json(post)
}
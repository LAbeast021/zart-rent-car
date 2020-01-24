var User = require('../models/user');
var Car = require('../models/car');

module.exports = {
    getUserPosts,
    getPostDetail,
    getAllPosts,
    addComment,
    deleteComment
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
    await Car.findOne({_id : req.params.id}, (err,post) => {
        res.status(200).json(post)
    });
    
///////////// commmments ///////////////////   
    
}
async function addComment (req, res) {
    await Car.findOne({_id : req.params.id}, function(err, car){
        car.comments.push(req.body)
        car.save()
    })
    res.status(200).json({
        sag:'ok'
    })
}
async function deleteComment (req,res){
    await Car.findOne({_id : req.params.id}, function(err,car){
        console.log('carrrrrrr',car.comments)
        car.comments.splice(req.params.idx,1)
        car.save()
        res.status(200).json({
            ok:'ok'
        })
    })
}
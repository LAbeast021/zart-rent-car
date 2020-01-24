var express = require('express');
var router = express.Router();
var postCtrl = require('../../controllers/posts');



router.post('/addComment/:id',postCtrl.addComment);
router.get('/deleteComment/:id/:idx',postCtrl.deleteComment);
router.get('/userPosts/:id' , postCtrl.getUserPosts);
router.get('/detail/:id' ,postCtrl.getPostDetail);
router.get('/', postCtrl.getAllPosts);
module.exports = router;
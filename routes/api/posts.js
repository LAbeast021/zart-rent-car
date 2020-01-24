var express = require('express');
var router = express.Router();
var postCtrl = require('../../controllers/posts');

router.get('/userPosts/:id' , postCtrl.getUserPosts);
// router.get('/', )
module.exports = router;
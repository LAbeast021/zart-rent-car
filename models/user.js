var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_ROUNDS = 6;

var userSchema = new Schema ({
    first_name: {type: String, required:true},
    last_name : {type: String, required:true},
    user_name : {type: String, required:true},
    email : {
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password : {type:String, required:true},



},{
    timestamps:true
})




module.exports = mongoose.model('User', userSchema)
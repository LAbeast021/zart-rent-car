var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_ROUNDS = 6;

var userSchema = new Schema ({
    first_name: {type: String, required:true},
    last_name : {type: String, required:true},
    username : {type: String, required:true},
    email : {
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password : {type:String, required:true},
    profilePic : {type:String},
    bio: {type:String}

},{
    timestamps:true
});


userSchema.set('toJSON', {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
      console.log(`this is ret in models = ${ret}`)
      delete ret.password;
      return ret;
    }
  });
  
  userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    // password has changed! - salt and hash
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
      user.password = hash;
      return next();
    });
  });
  
  userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
  }




module.exports = mongoose.model('User', userSchema)
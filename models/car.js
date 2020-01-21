var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var carSchema = new Schema ( { 
    brand:{type:String},
    model:{type:String},
    year:{type:Number},
    seats:{type:Number},
    condition:{type:String},
    pictures: [],
    sellerId: {type:String},
    sellerUsername: {type:String},
    exColor:{type:String},
    intColor:{type:String},
    engine:{type:String}
  
})

module.exports = mongoose.model('Car', carSchema);
var express = require('express');
var router = express.Router();
var multer = require('multer');
var cloudinary = require('../../config/cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var storage = cloudinaryStorage({
    cloudinary, 
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname );
      },
    allowedFormats: ["jpg", "jpeg", "png"],
});
var upload = multer({storage})
var carsCtrl = require('../../controllers/cars');


router.post('/new', upload.array('images',15) , carsCtrl.newCar)





module.exports = router;
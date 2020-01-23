var Car = require('../models/car');

module.exports = {
    newCar,
};

 async function newCar(req, res) {
        var newCar =  JSON.parse(req.body.carInformation) 
        console.log(newCar);
        req.files.forEach(e => {
           newCar.pictures.push(e.secure_url)})
        console.log(newCar);
        await Car.create(newCar)
        res.status(200).json({newCar})
       }

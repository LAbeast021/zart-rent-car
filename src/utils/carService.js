const BASE_URL = "/api/cars/";
var headers = Object.assign({},
  {'content-type': 'application/json'}, 
  {'Content-Type': 'multipart/form-data'}
);
// Removal should be case insensitive, or in any case, the header will be included:
// Object.keys(headers)
// .forEach( function(k) { 
// if (k.toLowerCase()==='content-type') delete headers[k] 
// })



export default {
    addCar,
};

function addCar(car) {
  console.log(car)
    return fetch(BASE_URL + 'new', {
      method: 'POST',
      // headers:new Headers({'content-type': 'application/json'}),
      body: car, 
    }).then (
      res => {
        if(res.ok) return res.json()

      }
    )
    
  }
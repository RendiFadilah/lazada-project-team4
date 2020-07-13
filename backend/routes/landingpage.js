var express = require('express');
var route = express.Router();
var landingPage = require('../model/landingpage-model');




/* GET home page. */
route.get('/v1/api/lazada', function(req, res, next) {
  let body;
  if(!req.query.searchKey){
    body = {searchKey: ''};
  }else{
    body = req.query;
  }
  landingPage.AllDataLanding(body, function(err,result) {
   if(err) throw console.log('Error When routing landingpage',err)
  res.send(result)
  });

});


route.post('/v1/api/lazada', function(req, res, next) { 
  landingPage.insertDataLanding(req.body,(err, result) => {
    if(err) throw console.log('Error when routing landingpagge',err);
    res.send(result)
  })  
})

module.exports = route;


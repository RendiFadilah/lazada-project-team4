var express = require('express');
var router = express.Router();
var landingPage = require('../model/landingpage-model');


/* GET home page. */
router.get('/v1/api/lazada', function(req, res, next) {
  let body;
  if(!req.query.searchKey){
    body = {searchKey: ''};
  }else{
    body = req.query;
  }
  landingPage.AllDataLanding(body,(err,result)=>{
   if(err) throw console.log('Error When routing landingpage',err)
    res.send(result)
  })
});


router.post('/v1/api/lazada', function(req, res, next) { 

  landingPage.insertDataLanding(req.body,(err, result) => {
    if(err) throw console.log('Error when routing landingpagge',err);
    res.send(result)
  })
})

module.exports = router;

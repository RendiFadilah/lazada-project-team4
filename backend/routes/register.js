const express = require('express');
const router = express.Router();
const register = require('../models/register');


router.post('/v1/api/register-pembeli', function(req, res, next) {
  let body;
  register.AllData(body, (err,result) => {
    if(err) throw console.log('Error when routing register', err)
    res.send(result)
  })
})




module.exports = router;









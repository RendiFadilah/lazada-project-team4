var express = require('express');
var router = express.Router();

<<<<<<< HEAD
const user = [
  {
    "name": "caca",
  }
]

/* GET home page. */
router.get('/v1/api/lazada', function(req, res, next) {
  res.send(user)
=======

/* GET home page. */
router.get('/v1/api/lazada', function(req, res, next) {
  res.send('Welcome')
>>>>>>> 85ad77441c4b55efc88b188af05d0cfafa0e255f
});

module.exports = router;

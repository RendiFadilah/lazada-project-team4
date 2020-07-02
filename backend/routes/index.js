var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/v1/api/lazada', function(req, res, next) {
  res.send('Welcome')
});

module.exports = router;

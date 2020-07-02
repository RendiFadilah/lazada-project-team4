var express = require('express');
var router = express.Router();

const user = [
  {
    "name": "caca",
  }
]

/* GET home page. */
router.get('/v1/api/lazada', function(req, res, next) {
  res.send(user)
});

module.exports = router;

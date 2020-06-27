var express = require('express');
var router = express.Router();

const user = [
  {
    "name": "azis",
  }
]

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.sends(user)
});

module.exports = router;

var express = require("express");
var router = express.Router();
var Users = require("../model/loginpenjual_model");
let crypto = require("crypto")
let secret = "lazada";
/* GET users listing. */

router.get("/v1/api/lazada/login", function (req, res) {
	res.send('Welcome')
})
router.post("/v1/api/lazada/login", function (req, res) {
	const { body } = req;

	const hash = crypto
		.createHmac("sha256", secret)
		.update(body.paword)
		.digest("hex");

	Users.getData({ ...body, password: hash }, function (err, result, fields) {
		if (err) throw err;
		req.session.email = result.email;
		req.session.password = result.password;
		return res.send({ err, result, fields });
		// req.session.save(() => res.redirect("/v1/api/lazada"));
	});
});

router.post("/v1/api/lazada/register", function (req, res) {
	const { body } = req;

	const hash = crypto
		.createHmac("sha256", secret)
		.update(body.password)
		.digest("hex");

	Users.create({ ...body, password: hash }, (err, result) => {
		if (err) throw err;
		res.send(result);
	});
});

module.exports = router;

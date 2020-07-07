var express = require("express");
var app = express();
let crypto = require("crypto");
let moment = require("moment");
let conn = require("../config/db");
let sha1 = require("sha1");

app.post("/v1/api/lazada/login", async function (req, res, next) {
	let now = moment().format("YYYY-MM-DD HH:mm:ss").toString();
	let email = req.body.email;
	let password = sha1(req.body.password);
	let token = crypto.randomBytes(32).toString("hex");
	let created_at = now;
	let updated_at = now;

	let sql = `INSERT INTO users (email,password,remember_token,created_at,updated_at) values(?,?,?,?,?)`;
	function data(success) {
		conn.query(sql, [email, password, token, created_at, updated_at], function (
			error
		) {
			if (error) {
				if (error.code === "ER_DUP_ENTRY") {
					res
						.status(401)
						.send({ message: `maaf email ${email} ini sudah digunakan` });
				}
				console.log(error);
				if (error) throw console.log("Error when duplicate email", error);
			}

			return success({ email: email, token: token });
		});
	}
	console.log(data);
	res.json({
		messgae: `Selamat email anda ${email}  telah terdaftar di lazada `,
	});
});

module.exports = app;

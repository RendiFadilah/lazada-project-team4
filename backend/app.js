<<<<<<< HEAD
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/landingpage");
var usersRouter = require("./routes/login");
// var itemRouter = require("./routes/itemdetails");
// var landingRouter = require("./routes/landingpage");
// var sellerProductRouter = require("./routes/sellerproducts");

=======
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');
>>>>>>> 58141ea052387b6a47ec9876f6603aaf780f6c82
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(
	session({
		secret: "keyboard cat",
		resave: true,
		saveUninitialized: true,
		cookie: {
			maxAge: 600000,
		},
	})
);

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
=======
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
>>>>>>> 58141ea052387b6a47ec9876f6603aaf780f6c82

const User = require("./model/loginpenjual_model");

const auth = function (req, res, next) {
	console.log("req auth", req.session.email);
	const { email, password } = req.session;
	console.log("res auth", req);
	User.getData({ email, password }, (err, res) => {
		console.log("auth res", res);

		if (password === res.password) {
			return next();
		}
		return res.redirect("/");
	});
};

app.use("/", indexRouter);
// app.use("/sellers", sellerProductRouter);
// app.use("/", landingRouter);
// app.use("/", itemRouter);
app.use("/", usersRouter);
// app.use("/posts", auth, postsRouter);
// catch 404 and forward to error handler
<<<<<<< HEAD
app.use(function (req, res, next) {
	next(createError(404));
});
=======
// app.use(function(req, res, next) {
//   next(createError(404));
// });
>>>>>>> 58141ea052387b6a47ec9876f6603aaf780f6c82

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});
<<<<<<< HEAD

module.exports = app;
=======
app.listen(4000, ()=>{
  console.log("server running on port 4000")
})
module.exports = app;
>>>>>>> 58141ea052387b6a47ec9876f6603aaf780f6c82

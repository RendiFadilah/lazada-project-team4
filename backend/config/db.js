<<<<<<< HEAD
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "lazada"
})
module.exports = connection
=======
const mysql = require("mysql")
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lazada"
})

module.exports = db
>>>>>>> f7e2ae5d08177949e9d68358c41349a33eff5677

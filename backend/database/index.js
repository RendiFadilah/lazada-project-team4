const mysql = require('mysql')

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'lazada_project'
})
db.connect()

module.exports = db
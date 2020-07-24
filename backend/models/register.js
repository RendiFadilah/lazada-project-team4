// file: /models/register.js
const conn = require('../database/index');

const AllData = (callback) => {
  conn.query(
    {
      sql: 'SELECT * FROM register'
    },
    function(err, result) {
      callback(err, result);
    }
  );
}
const InsertDataRegister = (item, callback) =>{
    conn.query({
      sql: 'INSERT INTO register SET ',
      values: {
        nomor_telepon     :     item.nomor_telepon,
        nama_lengkap      :     item.nama_lengkap,
        password          :     item.password,
        tanggal_lahir     :     item.tanggal_lahir
      }
    }, function(err, result){
      console.log(result)
      callback(err, result);
    })
}

module.exports = {
  AllData,
  InsertDataRegister
};
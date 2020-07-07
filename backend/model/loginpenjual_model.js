const db = require("../config/db/")
 function getdataLogin(body,callback){
    let body;
    console.log(body)
    db.query({
         sql:"SELECT * FROM users",
         values
     })
 }
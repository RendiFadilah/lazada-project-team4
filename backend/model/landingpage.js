const db = require("../config/db");

const AllDataLanding = (body,callback) => {
const {searchKey} = body;

console.log(body);
db.query(
{
sql: 'SELECT * FROM landingpage',
    values: [`%${searchKey}%`,`%${searchKey}%`]
},
    function(err, result) {
    console.log(result)
    callback(err, result);
}

);
}

const insertDataLanding = (item, callback) =>{
    db.query({
        sql: 'INSERT INTO landingpage SET ?',
            values: {
            name: item.name,
            image: item.image,
            price: item.price,
            discount: item.discount,
            sale: item.sale,
    }
},
    function(err, result) {
    console.log(result)
    callback(err, result);
})
}
const updateProduct = (item, id, callback) =>{   
    db.query({      
         sql: 'UPDATE landingpage SET ? WHERE id = ?',       
         values: [{...item},id]   },   
         function(err, result) {      
         console.log(result)       
         callback(err, result);   
}) 
}

module.exports = {
updateProduct,
AllDataLanding,
insertDataLanding
};
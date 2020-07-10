const express = require("express");
const app = express();
const ItemDetails = require("../model/detail_model")

app.get("v1/api/lazada/detailproducts/:id", (req, res) => {
    const userId = req.params.id;
    ItemDetails.findItemDetails(userId, (err,result) => {
        console.log(result);
        if(err) throw console.log("error when find one data" , err);
        res.send(result)
    })
})


app.post("v1/api/lazada/detailproducts" , (req,res) => {
    ItemDetails.ItemDetails(req.body, (err,result) => {
        if(err) console.log("when routing create item details", err);
        res.send(result)
    })
})

module.exports = app;
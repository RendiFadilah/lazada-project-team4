const express = require('express');
const { request, response } = require('express');
const app = express();

app.delete("/v1/api/lazada/:produk",(request,response)=>{
    let namaProduk = request.params.produk;

    response.end("Produk " + namaProduk + " akan di hapus dari beranda!")
})

module.exports = app;
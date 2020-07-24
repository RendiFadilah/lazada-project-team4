const express = require('express');
const { request, response } = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.delete("/v1/api/lazada/:produk",(request,response)=>{
    let namaProduk = request.params.produk;

    response.end("Produk " + namaProduk + " akan di hapus dari beranda!")
})

app.put('/v1/api/lazada/:id',(request,response)=>{
    let id = request.params.id;
    let namaProduk = request.body.nama;
    let hargaProduk = request.body.harga;

    response.end("Barang dengan ID " + id + " telah terupdate");
})

module.exports = app;
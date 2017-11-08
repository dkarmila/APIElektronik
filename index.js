//import yang akan digunakan
let express = require('express');
let bodyParser = require('body-parser'); // mengambil data yang diinput user
let mongoose = require('mongoose'); //konek database
require('./config/configdb');
let app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    next();
});
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8889));

//routes -> untuk menentukan url yang akan digunakan
let loginRoute = require("./login/loginRoute.js");
app.use('/api', loginRoute);

let loginpelangganRoute = require("./loginPelanggan/loginRoute.js");
app.use('/api', loginpelangganRoute);

let merkRoute = require("./merk/merkRoute.js");
app.use('/api', merkRoute);

let kategoriRoute = require("./kategori/kategoriRoute.js");
app.use('/api', kategoriRoute);

let barangRoute = require("./barang/barangRoute.js");
app.use('/api', barangRoute);

let kategoriBarangRoute = require("./kategoribarang/kategoribarangRoute.js");
app.use('/api', kategoriBarangRoute);

let pembelianRoute = require('./pembelian/pembelianRoute.js');
app.use('/api', pembelianRoute);

let pembelianDetailRoute =require('./pembeliandetail/pembeliandetailRoute.js');
app.use('/api', pembelianDetailRoute);

let petugasRoute = require('./petugas/petugasRoute');
app.use('/api',petugasRoute);

let pelangganRoute = require('./pelanggan/pelangganRoute');
app.use('/api',pelangganRoute);

let penjualanRoute = require('./penjualan/penjualanRoute');
app.use('/api',penjualanRoute);

let penjualandetailRoute = require('./penjualandetail/penjualandetailRoute');
app.use('/api',penjualandetailRoute);

//start server
app.listen(app.get('port'), function(){
    console.log("Node app is running on port "+ app.get('port'));
})

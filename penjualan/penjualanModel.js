let mong = require('mongoose');
let penjualan = mong.Schema({
    KdPenjualan:String,
    KdPelanggan:String,
	TglPenjualan: Date,
	JmlItem:Number,
	TotalHargaJual:Number,
	HargaBarang:Number
});
let Penjualan = module.exports =  mong.model("Penjualan",penjualan,"Penjualan");
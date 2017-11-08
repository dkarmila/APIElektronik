let mong = require('mongoose');
let penjualandetail = mong.Schema({
    KdPenjualan:String,
	KdBarang:String,
	JmlBarang: Number,
	SubTotal:Number,
	NamaBang:String,
	HargaBarang:Number,
	KategoriBarang:String
});
let PenjualanDetail = module.exports =  mong.model("PenjualanDetail",penjualandetail,"PenjualanDetail");
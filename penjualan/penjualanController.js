Penjualan = require('./penjualanModel.js');

// module.exports.getPenjualan = function(callback,limit){
    // Penjualan.find(callback).limit(limit);
// }
module.exports.getPenjualan = function(callback,limit){
    Penjualan.aggregate([
	{
		"$lookup":{
			from:"Petugas",
			localField:"KdPetugas",
			foreignField:"KdPetugas",
			as:"petugasInfo"}
	},{
            "$lookup":{
			from:"Pelanggan",
			localField:"KdPelanggan",
			foreignField:"KdPelanggan",
			as:"pelangganInfo"}
            }
],callback);
}

module.exports.getPenjualanById = function(_id,callback){
    Penjualan.findById(_id,callback);
}

module.exports.getPenjualanKdPenjualan = function(kdpenjualan,callback){
    Penjualan.aggregate([
	{
            "$lookup":{
			from:"Pelanggan",
			localField:"KdPelanggan",
			foreignField:"KdPelanggan",
			as:"pelangganInfo"}
    },{
		$match:{
			"KdPenjualan":kdpenjualan
		}
	}
	], callback);
}

module.exports.getPenjualanKdPelanggan = function(kdpelanggan,callback){
    Penjualan.find({KdPelanggan:kdpelanggan}, callback);
}

module.exports.createPenjualan = function(prpns,callback){
    Penjualan.create(prpns,callback);
}

module.exports.removePenjualan = function(_id,callback){
    Penjualan.findByIdAndRemove(_id,callback);
}

module.exports.updatePenjualanById = function(_id,prpns,callback){
    Penjualan.findByIdAndUpdate(_id,prpns,callback);
}
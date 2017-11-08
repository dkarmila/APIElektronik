Pembelian = require('./pembelianModel.js');

module.exports.getPembelian=function(callback,limit){
    Pembelian.find(callback).limit(limit);
}

module.exports.getPembelianByKd=function(kd, callback){
    Pembelian.find({KdPembelian:kd}, callback);
}

module.exports.getPembelianByKdBeli=function(kdBeli,callback){
    Pembelian.aggregate([
    {
        $match:{
            "KdPembelian":kdBeli
        }
    },{
        "$lookup":{
            from:"PembelianDetail",
            localField:"KdPembelian",
            foreignField:"KdPembelian",
            as:"InfoDetail"
        }
    }], callback);
}

//agregat by kode petugas
module.exports.getPembelianAgregatKdPet = function(kb, kt, callback){
	Pembelian.aggregate([
	{
		$match:{
			$and:[
				{"KdPembelian":kb},
				{"KdPetugas":kt}
			]
		}
	},{
		"$lookup":{
			from: "Petugas",
			localField: "KdPetugas",
			foreignField: "KdPetugas",
			as: "InfoPetugas"
		}
	}], callback);
}

//agregat 
module.exports.getPembelianAgregatPetugas = function(callback){
	Pembelian.aggregate([
	{
		"$lookup":{
			from: "Petugas",
			localField: "KdPetugas",
			foreignField: "KdPetugas",
			as: "InfoPetugas"
		}
	}], callback);
}

module.exports.getPembelianById=function(id, callback){
    Pembelian.findById(id, callback);
}

module.exports.updatePembelian=function(id, dataPembelian, callback){
    Pembelian.findByIdAndUpdate(id, dataPembelian, callback);
}

module.exports.createPembelian=function(dataPembelian, callback){
    Pembelian.create(dataPembelian, callback);
}

module.exports.rmvPembelian=function(id, callback){
    Pembelian.findByIdAndRemove(id, callback);
}

module.exports.rmvPembelianByKdBeli=function(id, callback){
    Pembelian.remove(
        {"KdPembelian":id}, callback);
}
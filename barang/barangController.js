let barang = require('./barangModel.js');

module.exports.getBarang = function(callback,limit){
    barang.find(callback).limit(limit);
}

module.exports.getBarangMatch = function(kat, merk, tipe, callback,limit){
    barang.find(
	{
		$and:[
			{
				KdKategoriBarang:kat
			},{
				KdMerkBarang:merk
			},{
				TypeBarang:tipe
			}
		]
	},callback).limit(limit);
}

module.exports.getBarangAgregat = function(callback){
	barang.aggregate([
	{
		"$lookup":{
			from:"KategoriBrg",
			localField:"KdKategoriBarang",
			foreignField:"KdKategoriBarang",
			as:"InfoKatBarang"
		}
	},
        {
		"$lookup":{
			from:"MerkBarang",
			localField:"KdMerkBarang",
			foreignField:"KdMerkBarang",
			as:"InfoMerkBarang"
		}
	}],callback);
}

module.exports.getBarangAgregatLimit = function(limit,callback){
	barang.aggregate([
	{
		"$lookup":{
			from:"KategoriBrg",
			localField:"KdKategoriBarang",
			foreignField:"KdKategoriBarang",
			as:"InfoKatBarang"
		}
	},
        {
		"$lookup":{
			from:"MerkBarang",
			localField:"KdMerkBarang",
			foreignField:"KdMerkBarang",
			as:"InfoMerkBarang"
		}
	},{
		$limit:Number(limit)
	}
	],callback);
}

module.exports.getBarangAgregatMatchMerk = function(namaMerk, callback){
	barang.aggregate([
	{
		"$lookup":{
			from:"KategoriBrg",
			localField:"KdKategoriBarang",
			foreignField:"KdKategoriBarang",
			as:"InfoKatBarang"
		}
	},
        {
		"$lookup":{
			from:"MerkBarang",
			localField:"KdMerkBarang",
			foreignField:"KdMerkBarang",
			as:"InfoMerkBarang"
		}
	},
	{
		$match:{
			"InfoMerkBarang.NamaMerkBarang":{'$regex': '.*'+namaMerk+'.*'}
		}
	}
	],callback);
}

module.exports.getBarangAgregatByKd = function(id,callback){
	barang.aggregate([
	{
		"$match":{
			"KdBarang":id
		}
	},
	{
		"$lookup":{
			from:"KategoriBrg",
			localField:"KdKategoriBarang",
			foreignField:"KdKategoriBarang",
			as:"InfoKatBarang"
		}
	},
        {
		"$lookup":{
			from:"MerkBarang",
			localField:"KdMerkBarang",
			foreignField:"KdMerkBarang",
			as:"InfoMerkBarang"
		}
	}],callback);
}

//agregat kategori barang
module.exports.getBarangAgregatByKat = function(id,callback){
	barang.aggregate([
	{
		"$match":{
			"KdKategoriBarang":id
		}
	},
	{
		"$lookup":{
			from:"KategoriBrg",
			localField:"KdKategoriBarang",
			foreignField:"KdKategoriBarang",
			as:"InfoKatBarang"
		}
	},
        {
		"$lookup":{
			from:"MerkBarang",
			localField:"KdMerkBarang",
			foreignField:"KdMerkBarang",
			as:"InfoMerkBarang"
		}
	}],callback);
}

module.exports.getBarangByKdBrg = function(kdBrg, callback){
	barang.find({KdBarang: kdBrg}, callback);
}

module.exports.getBarangByKdKatBrg = function(kdBrg, callback){
	barang.find({KdKategoriBarang: kdBrg}, callback);
}

module.exports.getBarangByKdBrgLimit = function(kdBrg, callback, limit){
	barang.find({KdKategoriBarang: kdBrg}, callback).limit(limit);
}

module.exports.getBarangById = function(id, callback, limit){
    barang.findById(id, callback).limit(limit);
}

module.exports.updateBarang = function(id, dataBarang, callback){
    barang.findByIdAndUpdate(id, dataBarang, callback);
}

module.exports.createBarang = function(dataBarang, callback){
    barang.create(dataBarang, callback);
}

module.exports.rmvBarang = function(id, callback){
    barang.findByIdAndRemove(id, callback)
}
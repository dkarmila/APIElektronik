KategoriBarang = require('./kategoribarangModel.js');

module.exports.getKategoriBarang = function(callback,limit){
    KategoriBarang.find(callback).limit(limit);
}

module.exports.getKategoriBarangById = function(id, callback){
    KategoriBarang.findById(id, callback);
}

module.exports.getKategoriBarangByKdKat = function(kd, callback){
    KategoriBarang.find({KdKategoriBarang:kd}, callback);
}

module.exports.updateKategoriBarang = function(id, dataKategori, callback){
    KategoriBarang.findByIdAndUpdate(id, dataKategori, callback);
}

module.exports.createKategoriBarang = function(dataKategori, callback){
    KategoriBarang.create(dataKategori, callback);
}

module.exports.rmvKategoriBarang = function(id, callback){
    KategoriBarang.findByIdAndRemove(id, callback);
}
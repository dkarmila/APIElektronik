KatBarang = require('./kategoriModel.js');

module.exports.getKategoriBarang = function(callback,limit){
    KatBarang.find(callback).limit(limit);
}

module.exports.getKategoriBarangById = function(id, callback){
    KatBarang.findById(id, callback);
}

module.exports.getKategoriBarangByKdKat = function(kd, callback){
    KatBarang.find({KdKategoriBarang:kd}, callback);
}

module.exports.getKategoriBarangByNama = function(nama, callback){
    KatBarang.find({NamaKategoriBarang:nama}, callback);
}

module.exports.updateKategoriBarang = function(id, dataKategori, callback){
    KatBarang.findByIdAndUpdate(id, dataKategori, callback);
}

module.exports.createKategoriBarang = function(dataKategori, callback){
    KatBarang.create(dataKategori, callback);
}

module.exports.rmvKategoriBarang = function(id, callback){
    KatBarang.findByIdAndRemove(id, callback);
}
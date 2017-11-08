MerkBarang = require('./merkModel.js');

module.exports.getMerkBarang = function(callback,limit){
    MerkBarang.find(callback).limit(limit);
}

module.exports.getMerkBarangById = function(id, callback){
    MerkBarang.findById(id, callback);
}

module.exports.getMerkBarangByKdKat = function(kd, callback){
    MerkBarang.find({KdMerkBarang:kd}, callback);
}

module.exports.getMerkBarangByNama = function(nama, callback){
    MerkBarang.find({NamaMerkBarang:nama}, callback);
}

module.exports.updateMerkBarang = function(id, dataMerk, callback){
    MerkBarang.findByIdAndUpdate(id, dataMerk, callback);
}

module.exports.createMerkBarang = function(dataMerk, callback){
    MerkBarang.create(dataMerk, callback);
}

module.exports.rmvMerkBarang = function(id, callback){
    MerkBarang.findByIdAndRemove(id, callback);
}
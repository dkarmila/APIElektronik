PembelianDetail = require('./pembeliandetailModel.js');

module.exports.getPembelianDetail = function(callback,limit){
    PembelianDetail.find(callback).limit(limit);
}

module.exports.getPembelianDetailById = function(id, callback){
    PembelianDetail.findById(id, callback);
}

module.exports.getPembelianDetailByKdBeli = function(kdBeli, callback){
    PembelianDetail.find({KdPembelian:kdBeli}, callback);
}

module.exports.updatePembelianDetail = function(id, dataPembelianDetail, callback){
    PembelianDetail.findByIdAndUpdate(id, dataPembelianDetail, callback);
}

module.exports.createPembelianDetail = function(dataPembelianDetail, callback){
    PembelianDetail.create(dataPembelianDetail, callback);
}

module.exports.rmvPembelianDetail = function(id, callback){
    PembelianDetail.findByIdAndRemove(id, callback);
}

module.exports.rmvPembelianDetailMany = function(id, callback){
    PembelianDetail.remove(
        {"KdPembelian":id}, callback);
}
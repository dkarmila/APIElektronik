Pelanggan = require('./pelangganModel.js');

module.exports.getPelanggan = function(callback,limit){
    Pelanggan.find(callback).limit(limit);
}

module.exports.getPelangganById = function(_id,callback){
    Pelanggan.findById(_id,callback);
}

module.exports.createPelanggan = function(prpns,callback){
    Pelanggan.create(prpns,callback);
}

module.exports.getPelangganByUsernamePelanggan = function(usernamepelanggan,callback){
    Pelanggan.find({UsernamePelanggan:usernamepelanggan},callback);
}

module.exports.getPelangganByNamaPelanggan = function(namapelanggan,callback){
    Pelanggan.find({NamaPelanggan:namapelanggan},callback);
}

module.exports.getPelangganByKdPelanggan = function(kdpelanggan,callback){
    Pelanggan.find({KdPelanggan:kdpelanggan},callback);
}

module.exports.removePelanggan = function(_id,callback){
    Pelanggan.findByIdAndRemove(_id,callback);
}

module.exports.updatePelangganById = function(_id,prpns,callback){
    Pelanggan.findByIdAndUpdate(_id,prpns,callback);
}
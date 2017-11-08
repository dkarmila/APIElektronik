PenjualanDetail = require('./penjualandetailModel.js');

module.exports.getPenjualanDetail = function(callback,limit){
    PenjualanDetail.find(callback).limit(limit);
}

module.exports.getPenjualanDetailById = function(_id,callback){
    PenjualanDetail.findById(_id,callback);
}

module.exports.getPenjualanDetailByKdPenjualan = function(kdpenjualan,callback){
    PenjualanDetail.find({KdPenjualan:kdpenjualan},callback);
}

module.exports.createPenjualanDetail = function(prpns,callback){
    PenjualanDetail.create(prpns,callback);
}

module.exports.removePenjualanDetail = function(_id,callback){
    PenjualanDetail.findByIdAndRemove(_id,callback);
}

module.exports.updatePenjualanDetailById = function(_id,prpns,callback){
    PenjualanDetail.findByIdAndUpdate(_id,prpns,callback);
}
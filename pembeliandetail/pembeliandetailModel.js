let mongoose = require('mongoose');

let pembelianDetail = mongoose.Schema(
    {
        // KdPembelianDetail: {
        //     type: String,
        //     require: true,
        //     unique: true
        // },
		KdPembelian: String,
		KdBarang: String,
		JmlBarangBeli: Number,
		HargaBeli: Number,
        SubTotalBeli: Number,
    },
    {
        collection: 'PembelianDetail'
    }
)

let PembelianDetail = module.exports = mongoose.model('PembelianDetail', pembelianDetail);
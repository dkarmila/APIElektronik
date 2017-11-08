let mongoose = require('mongoose');

let pembelian = mongoose.Schema(
    {
        KdPembelian: {
            type: String,
            require: true,
            unique: true
        },
		KdPetugas: String,
		TglPembelian: Date,
		JmlItem: Number,
		TotalHargaBeli: Number,
		StatusPembayaran: Boolean
    },
    {
        collection: 'Pembelian'
    }
)

let Pembelian = module.exports = mongoose.model('Pembelian', pembelian);
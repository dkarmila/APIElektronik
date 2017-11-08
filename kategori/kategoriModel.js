let mongoose = require('mongoose');

let katBarang = mongoose.Schema(
    {
        KdKategoriBarang: String,
		NamaKategoriBarang: String
    },
    {
        collection: 'KategoriBrg'
    }
)

let KatBarang = module.exports = mongoose.model('KatBarang', katBarang);
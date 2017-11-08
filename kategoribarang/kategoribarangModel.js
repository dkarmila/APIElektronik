let mongoose = require('mongoose');

let kategoriBarang = mongoose.Schema(
    {
        KdKategoriBarang: {
            type: String,
            require: true,
            unique: true
        },
		NamaKategoriBarang: String,
		MerkBarang:
		[{
			KdMerkBarang: String,
			NamaMerkBarang: String
		}]
    },
    {
        collection: 'KategoriBarang'
    }
)

let KategoriBarang = module.exports = mongoose.model('KategoriBarang', kategoriBarang);
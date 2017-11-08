let mongoose = require('mongoose');

let merkBarang = mongoose.Schema(
    {
        KdMerkBarang: String,
		NamaMerkBarang: String
    },
    {
        collection: 'MerkBarang'
    }
)

let MerkBarang = module.exports = mongoose.model('MerkBarang', merkBarang);
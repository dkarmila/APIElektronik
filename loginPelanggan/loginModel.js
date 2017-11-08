let mongoose = require('mongoose');

let loginPelanggan = mongoose.Schema(
    {
        KdPelanggan: String,
        NamaPelanggan: String,
        AlamatPelanggan: String,
        NoTelp: String,
        NoRmh: String,
        UsernamePelanggan: String,
        PasswordPelanggan: String
    },
    {
        collection: 'Pelanggan'
    }
)

let LoginPelanggan = module.exports = mongoose.model('LoginPelanggan', loginPelanggan);
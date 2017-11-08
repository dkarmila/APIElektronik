let mongoose = require('mongoose');

let login = mongoose.Schema(
    {
        KdPetugas: String,
        NamaPetugas: String,
        AlamatPetugas: String,
        NoTelp: String,
        NoRmh: String,
        UsernamePetugas: String,
        PasswordPetugas: String
    },
    {
        collection: 'Petugas'
    }
)

let Login = module.exports = mongoose.model('Login', login);
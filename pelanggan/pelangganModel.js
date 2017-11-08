let mong = require('mongoose');
let pelanggan = mong.Schema({
    KdPelanggan:String,
    NamaPelanggan:String,
    AlamatPelanggan:String,
	NoRmh: String,
	NoTelp: String,
	UsernamePelanggan:String,
	PasswordPelanggan:String
});
let Pelanggan = module.exports =  mong.model("Pelanggan",pelanggan,"Pelanggan");
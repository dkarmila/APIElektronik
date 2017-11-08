//Ini yang dipisah Kategori dan Merk
let express = require('express');
let router = express.Router();
let kategoriController = require('./kategoriController.js');

router.get('/katbarang', function(req,res){
    kategoriController.getKategoriBarang(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/katbarang/:id', function(req, res){
    kategoriController.getKategoriBarangById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/katbarang/kategori/:kd', function(req, res){
    kategoriController.getKategoriBarangByKdKat(req.params.kd, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/katbarang/nama/:nama', function(req, res){
    kategoriController.getKategoriBarangByNama(req.params.nama, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.put('/katbarang/:id', function(req,res){
    let dataKategori = req.body;
    kategoriController.updateKategoriBarang(req.params.id, dataKategori, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.post('/katbarang', function(req,res){
    let dataKategori = req.body;
    kategoriController.createKategoriBarang(dataKategori, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/katbarang/:id', function(req,res){
    kategoriController.rmvKategoriBarang(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    })
})

module.exports=router;
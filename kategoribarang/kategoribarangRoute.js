let express = require('express');
let router = express.Router();
let kategoriBarangController = require('./kategoribarangController.js');

router.get('/kategoribarang', function(req,res){
    kategoriBarangController.getKategoriBarang(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/kategoribarang/:id', function(req, res){
    kategoriBarangController.getKategoriBarangById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/kategoribarang/kat/:kd', function(req, res){
    kategoriBarangController.getKategoriBarangByKdKat(req.params.kd, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.put('/kategoribarang/:id', function(req,res){
    let dataKategori = req.body;
    kategoriBarangController.updateKategoriBarang(req.params.id, dataKategori, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.post('/kategoribarang', function(req,res){
    let dataKategori = req.body;
    kategoriBarangController.createKategoriBarang(dataKategori, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/kategoribarang/:id', function(req,res){
    kategoriBarangController.rmvKategoriBarang(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    })
})

module.exports=router;
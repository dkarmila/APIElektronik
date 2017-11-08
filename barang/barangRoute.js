let express = require('express');
let router = express.Router();
let barangController = require ('./barangController.js');

router.get('/barang', function(req,res){
    barangController.getBarang(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/barang/match/:kat/:merk/:tipe', function(req,res){
    barangController.getBarangMatch(req.params.kat, req.params.merk, req.params.tipe, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/barang/agregat', function(req,res){
    barangController.getBarangAgregat(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//agregat limit
router.get('/barang/agregatlimit/:limit', function(req,res){
    barangController.getBarangAgregatLimit(req.params.limit, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//agregat match
router.get('/barang/agregatmatch/:namamerk', function(req,res){
    barangController.getBarangAgregatMatchMerk(req.params.namamerk, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//agregat kode barang
router.get('/barang/agregat/:id', function(req,res){
    barangController.getBarangAgregatByKd(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//agregat kode kategori barang
router.get('/barang/agregat/kat/:id', function(req,res){
    barangController.getBarangAgregatByKat(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//read by id
router.get('/barang/:id', function(req,res){
    barangController.getBarangById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//Kode Barang
router.get('/barang/brg/:kdBrg', function(req,res){
	barangController.getBarangByKdBrg(req.params.kdBrg, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//Kode Barang Limit
router.get('/barang/brglimit/:kdBrg', function(req,res){
	barangController.getBarangByKdBrgLimit(req.params.kdBrg, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    },4);
});

//Kode KategoriBarang
router.get('/barang/katbrg/:kdBrg', function(req,res){
	barangController.getBarangByKdKatBrg(req.params.kdBrg, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//update
router.put('/barang/:id', function(req,res){
    let dataBarang = req.body;
    barangController.updateBarang(req.params.id, dataBarang, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//create
router.post('/barang', function(req,res){
    let dataBarang = req.body;
    barangController.createBarang(dataBarang, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//delete
router.delete('/barang/:id', function(req,res){
    barangController.rmvBarang(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

module.exports=router;
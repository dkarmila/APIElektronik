let express = require('express');
let router = express.Router();
let pembelianController = require('./pembelianController');

router.get('/pembelian', function(req,res){
    pembelianController.getPembelian(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/pembelian/:id', function(req,res){
    pembelianController.getPembelianById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/pembelian/kd/:id', function(req,res){
    pembelianController.getPembelianByKd(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

//agregat
router.get('/pembelian/rinci/:kdBeli', function(req,res){
	pembelianController.getPembelianByKdBeli(req.params.kdBeli, function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

//agregat dengan petugas by kdPetugas
router.get('/pembelian/agregat/:kb/:kt', function(req,res){
	pembelianController.getPembelianAgregatKdPet(req.params.kb, req.params.kt, function(err, respon){
		if(err){
			throw err;
		};
		res.json(respon);
	});
});

router.get('/pembelian/agregatpetugas', function(req,res){
	pembelianController.getPembelianAgregatPetugas(function(err, respon){
		if(err){
			throw err;
		};
		res.json(respon);
	});
});

router.put('/pembelian/:id', function(req,res){
    let dataPembelian = req.body;
    pembelianController.updatePembelian(req.params.id, dataPembelian, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});


router.post('/pembelian', function(req,res){
    let dataPembelian = req.body;
    pembelianController.createPembelian(dataPembelian, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});


router.delete('/pembelian/:id', function(req,res){
    pembelianController.rmvPembelian(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/pembelian/kdbeli/:id', function(req,res){
    pembelianController.rmvPembelianByKdBeli(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});


module.exports=router;
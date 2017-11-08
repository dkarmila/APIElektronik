let express = require('express');
let router = express.Router();
let pembelianDetailController = require('./pembeliandetailController.js');

router.get('/pembeliandetail', function(req,res){
    pembelianDetailController.getPembelianDetail(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/pembeliandetail/:id', function(req,res){
    pembelianDetailController.getPembelianDetailById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/pembeliandetail/rinci/:kdBeli', function(req,res){
    pembelianDetailController.getPembelianDetailByKdBeli(req.params.kdBeli, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.put('/pembeliandetail/:id', function(req,res){
    let dataPembelianDetail = req.body;
    pembelianDetailController.updatePembelianDetail(req.params.id, dataPembelianDetail, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.post('/pembeliandetail', function(req,res){
    let dataPembelianDetail = req.body;
    pembelianDetailController.createPembelianDetail(dataPembelianDetail, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/pembeliandetail/:id', function(req,res){
    pembelianDetailController.rmvPembelianDetail(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/pembeliandetail/many/:id', function(req,res){
    pembelianDetailController.rmvPembelianDetailMany(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

module.exports=router;
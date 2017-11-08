let express = require('express');
let router = express.Router();
let merkController = require('./merkController.js');

router.get('/merkbarang', function(req,res){
    merkController.getMerkBarang(function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/merkbarang/:id', function(req, res){
    merkController.getMerkBarangById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/merkbarang/merk/:kd', function(req, res){
    merkController.getMerkBarangByKdKat(req.params.kd, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.get('/merkbarang/nama/:nama', function(req, res){
    merkController.getMerkBarangByNama(req.params.nama, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.put('/merkbarang/:id', function(req,res){
    let dataMerk = req.body;
    merkController.updateMerkBarang(req.params.id, dataMerk, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.post('/merkbarang', function(req,res){
    let dataMerk = req.body;
    merkController.createMerkBarang(dataMerk, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

router.delete('/merkbarang/:id', function(req,res){
    merkController.rmvMerkBarang(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    })
})

module.exports=router;
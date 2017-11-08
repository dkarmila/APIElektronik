let express = require('express');
let route = express.Router();
let pelangganController = require('./pelangganController.js');
route.get('/pelanggan',function(req,res){
    pelangganController.getPelanggan(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/pelanggan/:_id',function(req,res){
	let id = req.params._id;
    pelangganController.getPelangganById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.get('/namapelanggan/:namapelanggan',function(req,res){
	let namapelanggan = req.params.namapelanggan;
    pelangganController.getPelangganByNamaPelanggan(namapelanggan,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.get('/usernamepelanggan/:usernamepelanggan',function(req,res){
	let usernamepelanggan = req.params.usernamepelanggan;
    pelangganController.getPelangganByUsernamePelanggan(usernamepelanggan,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.get('/kdpelanggan/:kdpelanggan',function(req,res){
	let kdpelanggan = req.params.kdpelanggan;
    pelangganController.getPelangganByKdPelanggan(kdpelanggan,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.post('/pelanggan',function(req,res){
    let prpns = req.body;
    pelangganController.createPelanggan(prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/pelanggan/:_id',function(req,res){
    pelangganController.removePelanggan(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/pelanggan/:_id',function(req,res){
    let prpns = req.body;
    pelangganController.updatePelangganById(req.params._id,prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
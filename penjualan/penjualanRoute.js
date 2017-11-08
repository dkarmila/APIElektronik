let express = require('express');
let route = express.Router();
let penjualanController = require('./penjualanController.js');
route.get('/penjualan',function(req,res){
    penjualanController.getPenjualan(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/penjualan/:_id',function(req,res){
	let id = req.params._id;
    penjualanController.getPenjualanById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/kdpenjualan/:kdpenjualan',function(req,res){
	let kdpenjualan = req.params.kdpenjualan;
    penjualanController.getPenjualanKdPenjualan(kdpenjualan,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/penjualan/kdpelanggan/:kdpelanggan',function(req,res){
	let kdpelanggan = req.params.kdpelanggan;
    penjualanController.getPenjualanKdPelanggan(kdpelanggan,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/penjualan',function(req,res){
    let prpns = req.body;
    penjualanController.createPenjualan(prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/penjualan/:_id',function(req,res){
    penjualanController.removePenjualan(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/penjualan/:_id',function(req,res){
    let prpns = req.body;
    penjualanController.updatePenjualanById(req.params._id,prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
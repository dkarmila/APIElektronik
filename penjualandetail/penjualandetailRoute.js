let express = require('express');
let route = express.Router();
let penjualandetailController = require('./penjualandetailController.js');
route.get('/penjualandetail',function(req,res){
    penjualandetailController.getPenjualanDetail(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/penjualandetail/:_id',function(req,res){
	let id = req.params._id;
    penjualandetailController.getPenjualanDetailById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
//rubah disini
route.get('/penjualandetail/kdpenjualan/:kdpenjualan',function(req,res){
	let kdpenjualan = req.params.kdpenjualan;
    penjualandetailController.getPenjualanDetailByKdPenjualan(kdpenjualan,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/penjualandetail',function(req,res){
    let prpns = req.body;
    penjualandetailController.createPenjualanDetail(prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/penjualandetail/:_id',function(req,res){
    penjualandetailController.removePenjualanDetail(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/penjualandetail/:_id',function(req,res){
    let prpns = req.body;
    penjualandetailController.updatePenjualanDetailById(req.params._id,prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;

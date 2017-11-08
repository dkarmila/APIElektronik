let express = require('express');
let route = express.Router();
let petugasController = require('./petugasController.js');

route.get('/petugas',function(req,res){
    petugasController.getPetugas(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.get('/petugas/:_id',function(req,res){
	let id = req.params._id;
    petugasController.getPetugasById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.get('/usernamepetugas/:usernamepetugas',function(req,res){
	let usernamepetugas = req.params.usernamepetugas;
    petugasController.getPetugasByUsernamePetugas(usernamepetugas,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.get('/namapetugas/:namapetugas',function(req,res){
	let namapetugas = req.params.namapetugas;
    petugasController.getPetugasByNamaPetugas(namapetugas,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.get('/kdpetugas/:kdpetugas',function(req,res){
	let kdpetugas = req.params.kdpetugas;
    petugasController.getPetugasByKdPetugas(kdpetugas,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.post('/petugas',function(req,res){
    let prpns = req.body;
    petugasController.createPetugas(prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/petugas/:_id',function(req,res){
    petugasController.removePetugas(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.put('/petugas/:_id',function(req,res){
    let prpns = req.body;
    petugasController.updatePetugasById(req.params._id,prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
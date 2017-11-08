let mongoose = require('mongoose');

let database ={
    user : 'dbelektronik',
    pass : 'miniprojek',
    url : 'ds161209.mlab.com:61209',
    name : 'dbelektronik'
}
mongoose.connect('mongodb://'+ database.user +':'+ database.pass +'@'+ database.url +'/'+ database.name);
// mongoose.connect('mongodb://localhost:27017/DBElektronik');

let db=mongoose.connection;
db.on('error', console.error.bind(console, "Connection Error.."));
db.once('open', function(){
    console.log("Connection to dbElektronik is open ..");
})

const express = require('express');
const app = express();
const basic_routes = require('./routes/basic_user');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


var port = 3000;
var host = 'localhost';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/prosols',{useNewUrlParser:true,useUnifiedTopology:true})
.then((result) =>{
    if(result)
    {
        console.log("DB connection established");
    }
})
.catch((err) =>{
    console.log(`DB connection error \n ${err}`);
});

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/api',basic_routes);

app.use('**', (req,res)=>{
    res.json({
        message:"Invalid request"
    })
});

app.listen(port,host, ()=>{
    console.log(`server is listening on port = ${port}`)
});
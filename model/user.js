const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userschema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact_no:{
        type:Number,
        min:10,
        max:10,
        required:true
    }
});

const usermodel = mongoose.model('user_data',userschema);

module.exports = {
    usermodel : usermodel
}
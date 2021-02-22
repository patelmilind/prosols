const {usermodel} = require('../model/user');
const { validationResult } = require('express-validator');

exports.adduser = (req,res) =>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(422).json({
            message:"Invalid data posted",
            errors:error.array()
        });
    }
    var name = req.body.name;
    var email = req.body.email;
    var contact_no = req.body.contact;

    var user = new usermodel();
    user.collection.insertOne({
        name:name,
        email:email,
        contact_no:contact_no
    })
    .then((result) =>{
        res.status(200).json({
            message:"user data inseted in DB",
            data:result
        })
    })
    .catch((err) =>{
        res.status(500).json({
            message:"Internal server error"
        })
    });
}
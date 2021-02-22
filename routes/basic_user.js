const express = require('express');
const routes = express.Router();
const { check } = require('express-validator');

const usercon = require('../controller/user');

routes.post('/adduser',[check('email').isEmail(),check('contact').isLength({min:10,max:10})], usercon.adduser);

module.exports = routes;
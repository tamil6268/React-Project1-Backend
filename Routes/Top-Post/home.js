const express=require('express');
const home=express.Router();
const data=require('../../ApiControllers/Top-Post/home');
const page=home.route('/home/topPost');
page.get(data.apiController);
module.exports=home;
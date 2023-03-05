const express=require('express');
const home=express.Router();
const data=require('../../ApiControllers/Top-Post/Home4Pic');
const page=home.route('/home/topPost/limit=4');
page.get(data.apiController);
module.exports=home;
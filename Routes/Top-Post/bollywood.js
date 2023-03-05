const express=require('express');
const bollywood=express.Router();
const data=require('../../ApiControllers/Top-Post/Bollywood');
const page=bollywood.route('/bollywood/topPost');
page.get(data.apiController);
module.exports=bollywood;
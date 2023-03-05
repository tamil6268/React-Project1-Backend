const express=require('express');
const technology=express.Router();
const data=require('../../ApiControllers/Top-Post/technology');
const page=technology.route('/technology/topPost');
page.get(data.apiController);
module.exports=technology;
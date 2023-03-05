const express=require('express');
const food=express.Router();
const data=require('../../ApiControllers/Top-Post/Food');
const page=food.route('/food/topPost');
page.get(data.apiController);
module.exports=food;
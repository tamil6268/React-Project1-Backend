const express=require('express');
const fitness=express.Router();
const data=require('../../ApiControllers/Top-Post/Fitness');
const page=fitness.route('/fitness/topPost');
page.get(data.apiController);
module.exports=fitness;
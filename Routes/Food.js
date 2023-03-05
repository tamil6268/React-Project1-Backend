const express=require('express');
const FoodData=require('../ApiControllers/Food');
const food=express.Router();
const foodPage=food.route('/food');
foodPage.get(FoodData.apiController);
module.exports=food;



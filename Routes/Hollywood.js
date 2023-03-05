const express=require('express');
const HollywoodData=require('../ApiControllers/Hollywood');
const hollywood=express.Router();
const hollywoodPage=hollywood.route('/hollywood');
hollywoodPage.get(HollywoodData.apiController);
module.exports=hollywood;
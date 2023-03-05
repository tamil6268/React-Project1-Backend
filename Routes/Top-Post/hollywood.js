const express=require('express');
const hollywood=express.Router();
const data=require('../../ApiControllers/Top-Post/Hollywood');
const page=hollywood.route('/hollywood/topPost');
page.get(data.apiController);
module.exports=hollywood;
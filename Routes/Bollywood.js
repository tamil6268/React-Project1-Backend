const express=require('express');
const BollywoodData=require('../ApiControllers/Bollywood');

const bollywood=express.Router();
const bollywoodPage=bollywood.route('/bollywood');

bollywoodPage.get(BollywoodData.apiController);

module.exports=bollywood;
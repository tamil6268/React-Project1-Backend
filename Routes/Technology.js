const express=require('express');
const TechnologyData=require('../ApiControllers/Technology');
const technology=express.Router();
const technologyPage=technology.route('/technology');
technologyPage.get(TechnologyData.apiController);
module.exports=technology;
const express=require('express');
const fitness=express.Router();
const FitnessData=require('../ApiControllers/Fitness');
const fitnessPage=fitness.route('/fitness');
fitnessPage.get(FitnessData.apiController);
module.exports=fitness;
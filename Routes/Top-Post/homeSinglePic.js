const express=require('express');
const pic=express.Router();
const data=require('../../ApiControllers/Top-Post/HomeSinglePic');
const page=pic.route('/home/singlepic');
page.get(data.apiController);
module.exports=pic;
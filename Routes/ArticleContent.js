const express=require('express');
const ArticleContentData=require('../ApiControllers/ArticleContent');
const articleHead=express.Router();
const ArticlePage=articleHead.route('/');

ArticlePage.get(ArticleContentData.apiController);

module.exports=articleHead;


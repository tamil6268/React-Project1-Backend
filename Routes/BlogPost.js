const express=require('express');
const BlogPostData=require('../ApiControllers/BlogPost');
const blogPost=express.Router();
const page=blogPost.route('/blogPost');
page.get(BlogPostData.apiController);
module.exports=blogPost;
const express=require('express');
const app=express();
const PORT=3008;
const cors=require('cors');
//routes
const bollywood=require('./Routes/Bollywood');
const fitness=require('./Routes/Fitness');
const food=require('./Routes/Food');
const hollywood=require('./Routes/Hollywood');
const technology=require('./Routes/Technology');
const articleHead=require('./Routes/ArticleContent');
const blogPost=require('./Routes/BlogPost');
const bollywoodTopPost=require('./Routes/Top-Post/bollywood');
const fitnessTopPost=require('./Routes/Top-Post/fitness');
const foodTopPost=require('./Routes/Top-Post/food');
const hollywoodTopPost=require('./Routes/Top-Post/hollywood');
const technologyTopPost=require('./Routes/Top-Post/technology');
const homeTopPost=require('./Routes/Top-Post/home');
const homeSinglePic=require('./Routes/Top-Post/homeSinglePic');
const home4Pic=require('./Routes/Top-Post/home4Pic');
//using files
app.use(cors());
app.use('/',bollywood);
app.use('/',fitness);
app.use('/',food);
app.use('/',hollywood);
app.use('/',technology);
app.use('/',articleHead);
app.use('/',blogPost);
app.use('/',bollywoodTopPost);
app.use('/',fitnessTopPost);
app.use('/',foodTopPost);
app.use('/',hollywoodTopPost);
app.use('/',technologyTopPost);
app.use('/',homeTopPost);
app.use('/',homeSinglePic);
app.use('/',home4Pic);
//listening the port
app.listen(PORT,()=>{
    console.log(`Server Started in Port http://localhost:${PORT}`)
})
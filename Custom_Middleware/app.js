const express = require('express')

const app = express()
// Application level middleware
app.use('/resource',auth,(req,res,next)=>{
    console.log('This is app middleware');
    next()
})
// Custom middleware
function auth(req,res,next){
    console.log("This is Auth");
    next()
}
// End point
app.get('/resource',(req,res)=>{
    console.log("This is end point");
    res.end("APP...!")
})

app.listen(5000,(err)=>{
    if(err){
        throw err
    }else{
        console.log("Server is running");
    }
})
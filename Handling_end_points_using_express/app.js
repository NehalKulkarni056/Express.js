const express = require('express')

const app = express()

app.get('/',users,(req,res)=>{
    console.log("This is app.get");
    res.end("Why so serious....!")
})

function users(req,res,next){
    console.log("This is middleware logged before app.get ");
    next()
}

app.listen(5000,(err)=>{
    if(err){
        throw err
    }else{
        console.log("Server is running");
    }
})
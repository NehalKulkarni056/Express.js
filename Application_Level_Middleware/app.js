const express = require('express')

// top level function
const app = express()

// mount middleware
app.use(users)

// route handler functions
app.get('/',(req,res)=>{
    console.log("This is home");
    res.end("Home page")
})

function users(req,res,next){
    console.log("This is middleware logged before");
    next()
}

app.get('/admin',(req,res)=>{
    console.log("This is admin");
    res.end("Admin page")
})

app.listen(5000,(err)=>{
    if(err){
        throw err
    }else{
        console.log("Server is running");
    }
})
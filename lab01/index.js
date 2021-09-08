const express = require('express');

let app = express()

// add routes here

app.listen(3000, ()=> {
    console.log('Server Started')
})

app.get('/', function(req,res){
    res.send("<h1>Hello from Express</h1>");
})
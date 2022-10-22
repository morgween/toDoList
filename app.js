const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set(ejs);


app.get("/",(req,res)=>{
    res.send("Hello")
})


app.listen(3000,()=>{
    console.log("Server started on port 3000")
})

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var items = [];
var workItems = [];


app.set("view engine","ejs");


app.post("/",(req,res)=>{
    if (req.body.list ==="Work"){
        workItems.push(req.body.newItem);
        res.redirect("/work");
    }
    else {
        items.push(req.body.newItem);
        res.redirect("/");
    }
});


app.get("/",(req,res)=>{
    res.render("list", {listTitle : date(), newListItems : items});
});

app.get("/work", (req,res)=>{
    res.render("list", {listTitle : "Work List", newListItems:workItems});
});

app.get("/about", (req,res)=>{
    res.render("about");
});



app.listen(3000,()=>{
    console.log("Server started on port 3000");
});

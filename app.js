const express = require("express");
const bodyParser = require("body-parser");

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
    let today = new Date();

    let options={
        weekday:'long',
        day:'numeric',
        month:'long'
    };

    res.render("list", {listTitle : today.toLocaleDateString("en-US", options), newListItems : items});
});

app.get("/work", (req,res)=>{
    res.render("list", {listTitle : "Work List", newListItems:workItems});
});



app.listen(3000,()=>{
    console.log("Server started on port 3000");
});

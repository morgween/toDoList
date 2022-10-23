const express = require("express");
const bodyParser = require("body-parser");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var items = [];


app.set("view engine","ejs");


app.post("/",(req,res)=>{
    items.push(req.body.newItem);
    res.redirect("/");
});


app.get("/",(req,res)=>{
    let today = new Date();

    let options={
        weekday:'long',
        day:'numeric',
        month:'long'
    };

    res.render("list", {kindOfDay : today.toLocaleDateString("en-US", options), newListItems : items});
})


app.listen(3000,()=>{
    console.log("Server started on port 3000")
})

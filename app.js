var express = require("express"),
    app= express();

app.set("view engine","ejs")

app.get("/",function(req,res){
  res.render("home")
})

app.get("/about",function(req,res){
  res.render("about")
})

app.get("/contact",function(req,res){
  res.render("contact")
})

app.listen(300,function(req,res){
  console.log("server started...");
})

var express = require("express"),
    app= express();

app.set("view engine","ejs")

app.get("/",function(req,res){

  res.render("home")
})

app.listen(300,function(req,res){

  console.log("server started...");
})

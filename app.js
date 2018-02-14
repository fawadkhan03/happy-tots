var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server Has Started!");
 });

// app.listen(3001, 'localhost', function(){
//     console.log("server is running");
// });
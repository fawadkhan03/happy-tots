var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/why-happy-tots", function(req, res){
	res.render("why-happy-tots");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server Has Started!");
 });
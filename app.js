var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/why-happy-tots", function(req, res){
	res.render("why-happy-tots");
});

app.get("/locations", function(req, res){
	res.render("locations");
});

app.get("/our-programs", function(req, res){
	res.render("our-programs")
})

app.get("/enroll", function(req,res){
	res.render("enroll");
});

app.get("/contact", function(req, res){
	res.render("contact")
});

app.get("/reviews", function(req, res){
	res.render("reviews")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server Has Started!");
 });
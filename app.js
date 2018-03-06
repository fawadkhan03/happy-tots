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
	res.render("programs/our-programs")
});

app.get("/our-programs/infant", function(req, res){
	res.render("programs/infant")
});

app.get("/our-programs/toddler", function(req, res){
	res.render("programs/toddler")
});

app.get("/our-programs/preschool", function(req, res){
	res.render("programs/preschool")
});

app.get("/our-programs/transitional-kindergarten", function(req, res){
	res.render("programs/tk")
});

app.get("/our-programs/kindergarten", function(req, res){
	res.render("programs/kindergarten")
});

app.get("/our-programs/field-trips", function(req, res){
	res.render("programs/fieldtrips")
});

app.get("/our-programs/language-classes", function(req, res){
	res.render("programs/language")
});

app.get("/our-programs/summer", function(req, res){
	res.render("programs/summer")
});

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
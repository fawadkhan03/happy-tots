var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var nodemailer = require("nodemailer");
var app = express();

var programsRoutes = require("./routes/programs");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render("index");
});

app.get("/why-happy-tots", function(req, res){
	res.render("why-happy-tots");
});

app.get("/locations", function(req, res){
	res.render("locations");
});

app.get("/enroll", function(req,res){
	res.render("enroll");
});

app.post("/send", function(req, res){
	console.log(req.body);
})

app.get("/contact", function(req, res){
	res.render("contact")
});

app.get("/reviews", function(req, res){
	res.render("reviews")
});

app.get("/careers", function(req, res){
	res.render("careers")
});

app.use("/our-programs", programsRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server Has Started!");
 });
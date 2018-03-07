var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.render("programs/our-programs")
});

router.get("/infant", function(req, res){
	res.render("programs/infant")
});

router.get("/toddler", function(req, res){
	res.render("programs/toddler")
});

router.get("/preschool", function(req, res){
	res.render("programs/preschool")
});

router.get("/transitional-kindergarten", function(req, res){
	res.render("programs/tk")
});

router.get("/kindergarten", function(req, res){
	res.render("programs/kindergarten")
});

router.get("/field-trips", function(req, res){
	res.render("programs/fieldtrips")
});

router.get("/language-classes", function(req, res){
	res.render("programs/language")
});

router.get("/summer", function(req, res){
	res.render("programs/summer")
});

module.exports = router; 
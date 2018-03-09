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
	var output = `
		<p>You have a new enroll request</p>
		<h3>Contact Details</h3>
		<ul>
			<li>First Name: $(req.body.firstName)</li>
			<li>Last Name: $(req.body.lastName)</li>
			<li>Email: $(req.body.email)</li>
			<li>Phone: $(req.body.phone)</li>
			<li>Childs Name: $(req.body.childsName)</li>
			<li>Child Birthday: $(req.body.childBirthday)</li>
			<li>Program: $(req.body.program)</li>
			<li>Location: $(req.body.location)</li>
		</ul>
	`;
	// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "fawadkhan03@gmail.com", // generated ethereal user
            pass: "Recovery101!" // generated ethereal password
        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Node Mailer Contact" <fawadkhan03@gmail.com>', // sender address
        to: 'fawadkhan03@gmail.com', // list of receivers
        subject: 'New Enroll Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
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
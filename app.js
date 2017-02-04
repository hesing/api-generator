var express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost/bookdb", function(){
	console.log("Connected to bookdb");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
	res.send("Welcome Hemant");
});

var bookRouter = require("./routes/bookRouter")();
var authorRouter = require("./routes/authorRouter")();
app.use("/api/books", bookRouter);
app.use("/api/authors", authorRouter);

app.listen(port, function(){
	console.log("browse http://localhost:"+ port);
});
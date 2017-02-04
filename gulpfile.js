var gulp =require("gulp"),
	nodemon = require("nodemon");

require('./gulp-tasks/generator')(gulp);

gulp.task("default", function(){
	nodemon({
		script: "server.js",
		ext: "js",
		env: {
			PORT: 8000
		},
		ignore: ["./node_modules/**"]
	})
	.on("restart", function(){
		console.log("restart");
	}); 
});
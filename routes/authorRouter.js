var express = require("express");
var	Author = require("../models/author.js");
var authorRouter = express.Router();

module.exports = function(){
	authorRouter.route("/")
		// exact match
		// .get(function(req, res){
		// 	Author.find(req.query, function(err, records){
		// 		if(err){
		// 			res.status(500).send(err);
		// 		} else {
		// 			res.json(records);
		// 		}
		// 	});
		// })
		// contains match ( including exact match)
		.get(function(req, res){
			Author.find({ 'name': new RegExp(req.query.name, 'i'), 'location': new RegExp(req.query.location, 'i')}).sort('name').exec(function(err, records) {
			   	if(err){
					res.status(500).send(err);
				} else {
					res.json(records);
				}
			});
		})
		.post(function(req, res){
			var author = new Author(req.body);

			author.save(function(err, author){
				if(err){
					res.status(500).send(err);
				} else {
					res.status(201).json(author);
				}
			});
		});

	authorRouter.route("/:authorId")
		.get(function(req, res){

			Author.findById(req.params.authorId, function(err, records){
				if(err){
					res.status(500).send(err);
				} else {
					res.json(records);
				}
			});
		})
		.put(function(req, res){
			Author.findByIdAndUpdate(req.params.authorId, req.body, function(err, record) {
				if(err){
					res.status(500).send(err);
				} else {
					res.json(record);
				}
			});
		})
		.delete(function(req, res){
			Author.findByIdAndRemove(req.params.authorId, function(err, data) {
				if(err){
					res.status(500).send(err);
				} else {
					res.status(204).json({message: "record successfully deleted"});
				}
			});
		});


	return authorRouter;
};

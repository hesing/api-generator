var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	author: String,
	pubYear: Number,
	isbn: String,
	createdOn: {type: Date, default: Date.now},
	read: { type: Boolean, default: false}
});

module.exports = mongoose.model("Book", BookSchema);
var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var PhotoSchema = new Schema({

}, { strict: false, versionKey: false });

module.exports = mongoose.model("Photo", PhotoSchema);
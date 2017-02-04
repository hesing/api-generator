var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var Photo1Schema = new Schema({

}, { strict: false, versionKey: false });

module.exports = mongoose.model("Photo1", Photo1Schema);
var mongoose = require("mongoose"),
	Schema = mongoose.Schema;

var <%= upCaseName %>Schema = new Schema({

}, { strict: false, versionKey: false });

module.exports = mongoose.model("<%= upCaseName %>", <%= upCaseName %>Schema);
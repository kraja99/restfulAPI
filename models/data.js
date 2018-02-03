//require dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//create the data schema
var dataSchema = new mongoose.Schema({
	val1 : Number,
	val2: Number,
	input: Number,
	correct: String
});

//send the schema back
module.exports = restful.model('Data', dataSchema);
var restful = require('node-restful');
var mongoose = restful.mongoose;

var dataSchema = new mongoose.Schema({
	val1 : Number,
	val2: Number,
	input: Number,
	correct: String
});

module.exports = restful.model('Data', dataSchema);
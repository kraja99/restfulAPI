//require dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

//connect to the database
var db = mongoose.connect('mongodb://kk9:mongo123@ds127564.mlab.com:27564/testdatabase', function(err){
	if(err) console.log('Connection error: ' + err);
});

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//set the routing through /api
app.use('/api', require('./routes/api'));

//start running the app on the port
app.listen(port);
console.log('API is listening');
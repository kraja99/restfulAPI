var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://kk9:mongo123@ds127564.mlab.com:27564/testdatabase', function(err){
	if(err) console.log('Connection error: ' + err);
});

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.listen(3000);
//process.on('unhandledRejection', up => { throw up })
console.log('API is listening on database');
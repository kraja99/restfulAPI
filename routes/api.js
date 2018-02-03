//require dependencies
var express = require('express');
var router = express.Router();

//get the data model
var Data = require('../models/data');
//use get put post and delete methods for the api
Data.methods(['get', 'put', 'post', 'delete']);

//before posting the data to the database check if the input value is correct and update the data
Data.before('post', function(req, res, next){
	if(req.body.val1 + req.body.val2 == req.body.input)
		req.body.correct = "Correct";
	else
		req.body.correct = "Incorrect";
	next();
});

//send the data to /data
Data.register(router, '/data')

//send the router
module.exports = router;
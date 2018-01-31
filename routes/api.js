var express = require('express');
var router = express.Router();

/*router.get('/data', function(req, res){
	res.send('working');
});*/

var Data = require('../models/data');
Data.methods(['get', 'put', 'post', 'delete']);

Data.before('post', function(req, res, next){
	if(req.body.val1 + req.body.val2 == req.body.input)
		req.body.correct = "Correct";
	else
		req.body.correct = "Incorrect";
	next();
});

Data.after('post', function(req, res, next){
	//console.log(res.locals.bundle);
	next();
});

Data.register(router, '/data')

module.exports = router;
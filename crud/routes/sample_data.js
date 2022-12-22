var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	// var query = "SELECT * FROM sample_data ORDER BY id DESC";
	response.render('sample_data', {title:'Zameen.com Data Insights',});
	

});

module.exports = router;
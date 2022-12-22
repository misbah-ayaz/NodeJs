var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM  zameen WHERE Location = 'I-8, Islamabad, Islamabad Capital' Limit 15";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data3', {title:'Zameen.com Data Insights', action:'list', sampleData:data});
		}

	});

});

module.exports = router;
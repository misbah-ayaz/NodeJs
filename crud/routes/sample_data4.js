var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM  zameen WHERE Year = '2021'";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data4', {title:'Zameen.com Data Insights', action:'list', sampleData:data});
		}

	});

});

module.exports = router;
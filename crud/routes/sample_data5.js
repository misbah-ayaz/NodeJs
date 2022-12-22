var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT area_id, price_index, change_in_price, area_value FROM  area";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data5', {title:'Zameen.com Data Insights', action:'list', sampleData:data});
		}

	});

});

module.exports = router;
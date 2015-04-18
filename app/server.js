var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


app.get('/scrape', function( req, res ) {
    
    url = 'http://www.apache.org/';

    request( url, function( error, response, html ) {
        if( !error ) {
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { title : "", release : "", rating : ""};

            $('.panel-heading').filter(function() {
                var data = $(this);
                title = data.find('.panel-title').text();
                json.title = title;
            })
        }

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {
		    console.log( 'File successfully written! - Check your project directory for the output.json file' );
		});

		// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
		res.send( 'Check your console!' );
    });
});


app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
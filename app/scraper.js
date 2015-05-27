var path = 'for-scraping/example.html';

var express = require('express'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  $ = cheerio.load(fs.readFileSync( path ));

var name = $('.sitemapTree').text();

var jadefile = '';

$('.sitemapPageName').each(function(i) {
  var current = $(this).text();
  var itemName = '  - item.name = ' + '"' + current + '"' + '\r\n';
  var itemUrl = '  - item.url = "#"' + '\r\n';
  var item = '- item = {}' + '\r\n' + itemName + itemUrl;
  jadefile = jadefile + item;
});

fs.writeFile('output.jade', jadefile, function(err) {
  console.log( 'File successfully written! - Check your project directory for the output.jade file' );
});

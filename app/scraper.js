var path = 'for-scraping/example.html';

var express = require('express'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  $ = cheerio.load(fs.readFileSync( path ));

var name = $('.sitemapTree').text();

var pages = [];

$('.sitemapPageName').each(function(i) {
  var current = $(this).text();
  pages[i] = current;
});

jadefile = pages;

fs.writeFile('output.jade', jadefile, function(err) {
  console.log( 'File successfully written! - Check your project directory for the output.jade file' );
});

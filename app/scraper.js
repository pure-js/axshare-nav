var path;

process.argv.forEach(function(val, index, array) {
  if(index === 2) {
    path = val;
  }
});

var express = require('express'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  $ = cheerio.load(fs.readFileSync( path ));

var name = $('.sitemapTree').text();

var jadefile = '';


// Make output directory if doesn't exist
fs.mkdir('output');


$('.sitemapPageName').each(function(i) {
  var current = $(this).text();
  var item = {};
  item.name = '  - item.name = ' + '"' + current + '"' + '\r\n';
  item.url = '  - item.url = "#"' + '\r\n';
  item = '- item = {}' + '\r\n' + item.name + item.url + '\r\n';
  jadefile = jadefile + item;

  var pageName = current.toLowerCase().replace(/ /g, "-");
  console.log(pageName);

  var page = 'output/' + pageName + '.jade';

  fs.writeFile(page, '', function (err) {
    if (err) throw err;
  });
});

fs.writeFile('output.jade', jadefile, function(err) {
  console.log( 'File successfully written! - Check your project directory for the output.jade file' );
});

 // TODO: Add ability to create files with current names

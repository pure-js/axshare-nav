var express = require('express'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  $ = cheerio.load(fs.readFileSync('for-scraping/example.html'));

var name = $('.sitemapTree').text();

var pages = [];

$('.sitemapPageName').each(function(i) {
  var current = $(this).text();
  pages[i] = current;
});

console.log( pages[7] );

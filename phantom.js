var fs = require('fs'),
  system = require('system'),
  page = require('webpage').create();


var address = system.args[1]; // Get first argument

page.open(address, function(status) {

  console.log("Status: " + status);

  if(status === "success") {
    var path = 'for-scraping/result.html';
    // Write html to output.html file
    fs.write(path, page.content, 'w');
  }

  phantom.exit();
});

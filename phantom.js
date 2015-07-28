var fs = require('fs');
var page = require('webpage').create();

page.open('http://yed0ob.axshare.com/', function(status) {

  console.log("Status: " + status);

  if(status === "success") {
    var path = 'for-scraping/result.html';
    // Write html to output.html file
    fs.write(path, page.content, 'w');
  }

  phantom.exit();
});

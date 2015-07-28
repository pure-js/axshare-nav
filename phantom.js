var fs = require('fs');
var page = require('webpage').create();

page.open('http://yed0ob.axshare.com/', function(status) {

  console.log("Status: " + status);

  if(status === "success") {
    page.render('example.png');
  }

  var path = 'output.html';
  // Write html to output.html file
  fs.write(path, '<h1>Heading 1</h1>', 'w');

  phantom.exit();
});

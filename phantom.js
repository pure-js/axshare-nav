var fs = require('fs');
var page = require('webpage').create();
page.open('http://yed0ob.axshare.com/', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  var path = 'output.txt';
  fs.write(path, 'rtrtrt', 'w');
  phantom.exit();
});

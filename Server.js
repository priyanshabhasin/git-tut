var http = require('http');
var adr = 'http://localhost:2020/default.htm?id=1234&cid=social_facebook';

var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(2020);

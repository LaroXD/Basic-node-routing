var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
   console.log('request was made ='+req.url);
   if(req.url==="/"||req.url==="/home")
   {res.writeHead(200,{'Content-Type':'text/html'});
   res = fs.createReadStream(__dirname+'/html.html').pipe(res);
 }
  }).listen(8081)
console.log('server running');

http = require("http")

s = http.createServer(function(req, res){
   res.writeHead(200, {"Content-Type" : "text/plain"})
   res.end("Hello World");
})

s.listen(8080);

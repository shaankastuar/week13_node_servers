var http = require('http');
var PORT = 8080;
var server = http.createServer(function(req, res){

	var verb = req.method;
	res.end(verb);

	req.on('data', function(data){
		reqData += data;
	})

	req.on('end', function(){
		console.log('request ended')
	})

});

server.listen(PORT, function(){
	console.log('server on port', PORT)

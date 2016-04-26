//require http

var http = require('http');

//define a port listen on (convention is to capitalzie PORT)
var PORT = 8080;

//function that handles all requests

function handleRequest(request, response){
	response.end('It Works!');
}

//set up the server
//include a callback function (in this case, it's handle request)
var server = http.createServer(handleRequest);

//need to tell the server to listen
server.listen

//because it's possible to have multiple servers running on one computer at one time, you need to tell the server which port to listen on

server.listen(PORT, function(){
	console.log('server listening on: http://localhost:%s', PORT)
});

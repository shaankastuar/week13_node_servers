var http = require('http');
var url = require('url');

// you would use FS to use node to locate other 
// HTML files for the server to actually serve


// var fs = require('fs');

var PORT = 8080;

function handleRequest(request, response){
	response.end('response confirmed');

	var url_parts = url.parse(request.url);

	switch(url.pathname){
		case '/': display_root(url_parts.pathname, request, response);
		break;

		default: display_404(url_parts.pathname, request, response);
		break;

		case 'food': dispaly_food(url_parts.pathname, request, response);
		break;

		case 'css': display_css(url_parts.pathname, request, reponse);
		break;

		case: 'movies': dislpay_movies(url_parts.pathname, request, response);
		break;
	}
}

function display_root(url, request, response){
	var myHTML = "<html><body><h1>home page</h1></body></html>";

	res.writeHead(200, {'content-type': 'text/html'});
	res.end(myHTML);
}

function display_404(url. request, response){
	res.writeHead(404, {'content-type': 'text/html'});
	res.write('<h1>404</h1><br><p>page not found</p>')
}

function display_food(url, request, response){
	res.writeHead(200, {'content-type': 'text/html'});
	res.write("<h1>food</h1>");
	res.end("food stuff")
}

function display_css(url, request, response){
	res.writeHead(200, {'content-type': 'text/html'});
	res.write('<h1>css format</h1>');
	function.end('<h1> bootstrapping is not a crime</h1>')
}

function display_movies(url, request, response){
	res.writeHead(200, {'content-type': 'text/html'});
	res.write("<h1>movies</h1><br><p>best movie ever is superbad</p>");
	res.end('<h2>not really a debate</h2>')
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log('server listening on: http://localhost:%s', PORT)
});
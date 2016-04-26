var http  = require('http');
var PORT = 7000;
var PORT2 = 7500;

function handleRequest7000(request, response){
	response.end('no matter how much you screw everything else up, you\'re damn good at guitar');
}

var server = http.createServer(handleRequest7000);

server.listen(PORT, function(){
	console.log('server listening on: http://localhost:%s', PORT)
});


var server2 = http.createServer(handleRequest7500);
function handleRequest7500(request, response){
	response.end('can you please stop bleeding money,  being irresponsible, hanging out with evil ex girlfriends, start workign harder at work, stop being to ADD, actually focus on what\'s important, and be man enough to take care of what you need to do instead of avoiding it by sitting on reddit all the time in a psuedo-procrastination like state even though you secretly know that you aren\'t lazy, but just running away from starting something hard?');
}

server2.listen(PORT2, function(){
	console.log('server listening on http://localhost:%s', PORT2)
});

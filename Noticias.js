console.log('Site de Notícias - Node');

var http = require('http');

var server = http.createServer(function (requisition, response){
	var categoria = requisition.url;
	if(categoria == '/tecnologia'){
		response.end('<h1>Tecnologia</h1>');
	}else if(categoria == '/moda'){
		response.end('<h1>Moda</h1>');
	}else{
		response.end('<h1>Home</h1>');
	}
	
});

server.listen(3000);
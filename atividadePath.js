var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, resp){
	var result = url.parse(req.url, true);
	var caminho = result.path;

	if (caminho == "/artigos" || caminho == "/") {
		fs.readFile("./artigos.html", function(erro, html){
			if(erro) throw erro;
			resp.write(html);
			resp.end();
			
			
		});
	} else if (caminho == "/contato") {
		fs.readFile("./contato.html", function(erro, html){
			if (erro) throw erro;
			resp.write(html);
			resp.end();

		});
	}else if (caminho != "/contato" && caminho != "/artigos") {
		fs.readFile("./erro.html", function(erro, html){
			if (erro) throw erro;
			resp.write(html);
			resp.end();

		});
	}
});

server.listen(3000, function(){
	console.log("SERVIDOR EM EXEC");
})
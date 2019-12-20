'use strict'

const fs = require('fs');
const http = require('http');
const path = require('path');
const port = 3000;

http.createServer(function(req, res){
	const filePath = path.join(__dirname, './frontend', req.url );

	if (req.url === '/') {
		fs.readFile('./frontend/index.html', 'UTF-8', function(err, html) {
			res.writeHead(200, {'Conten-Type': 'text/html'});
			res.end(html);
		})
	} else if (req.url.match('\.css$')) {
		const fileStream = fs.createReadStream(filePath, 'UTF-8');
		res.writeHead(200, {'Content-Type': 'text/css'});
		fileStream.pipe(res);
	} else if (req.url.match('\.js$')) {
		const filePathEngineCore = path.join(__dirname, './frontend/engine-core/', req.url );
		const fileStream = fs.createReadStream(filePathEngineCore, 'UTF-8');
		res.writeHead(200, {'Content-Type': 'text/javascript'});
		fileStream.pipe(res);
	} else if (req.url.match('\.png$')) {
		const fileStream = fs.createReadStream(filePath);
		res.writeHead(200, {'Content-Type': 'image/png'});
		fileStream.pipe(res);
	}

	console.log(req.url);
}).listen(port)

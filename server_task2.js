var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 5000;

var server = http.createServer(function(req,res){
    console.log(`Request for ${req.url} by method ${req.method}`);
    if (req.method === 'GET'){
        var fileUrl = req.url;

        if (fileUrl === '/'){
            var filePath = './public/home.html'
        } else {
            var filePath = path.resolve('./public'+fileUrl+'.html');
        }
       
        if (fileUrl === '/'){
            fs.access(filePath, function(err){
                if (err){
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end(`<html><body><h1>Error 404: ${fileUrl} not found </h1></body></html>`);
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        } else if (fileUrl === '/about'){
            fs.access(filePath, function(err){
                if (err){
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end(`<html><body><h1>Error 404: ${fileUrl} not found </h1></body></html>`);
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        } else if (fileUrl === '/contact'){
            fs.access(filePath, function(err){
                if (err){
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end(`<html><body><h1>Error 404: ${fileUrl} not found </h1></body></html>`);
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.end(`<html><body><h1>Invalid Request!</h1></body></html>`);
            return;
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end(`<html><body><h1>Invalid Request!</h1></body></html>`);
        return;
    }
});

server.listen(port, hostname, () =>{
    console.log(`The NodeJS server on port ${port} is now running....`);
});

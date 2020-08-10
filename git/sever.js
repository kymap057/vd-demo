const http = require("http");
const fs = require('fs');
//const run_time= require('run-time.js')
//const tx = require('./index.html')
http.createServer(function(req,res){
    fs.readFile('./index.html',function(err,data){
        res.writeHead(404,{'content-type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8001);
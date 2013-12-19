/**
 * Created by romeo131 on 12/10/13.
 */
var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Mr.Karl~\n');
//}).listen(8080, "127.0.0.1");
}).listen(8080, "192.168.56.101");

console.log('Server running at http://127.0.0.1:8080/');

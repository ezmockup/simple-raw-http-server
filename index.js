const http = require('http');

http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});

const url = req.url;

 if(url ==='/home'){
    res.write('<h1>this is home page<h1>');
    res.end();
 }else if(url ==='/contact'){
    res.write('<h1>this is contact us page<h1>');
    res.end();
 }else{
    res.write('<h1>This is default page<h1>');
    res.end();
 }
}).listen(3000, function(){
 console.log("server start at port 3000");
});

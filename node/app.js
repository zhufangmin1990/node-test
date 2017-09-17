const http=require('http');
const hostname= '127.0.0.1';
const port =8000;
const server = http.createServer((req,res) => {
	res.statusCodes = 200;
	res.setHeader('Content-Type','text/html;charset=utf-8');
	res.write('<h1>HELLO　ＷＯＲＬＤ</h1>');
	res.end('hello word');

}).listen(port,hostname,() =>{
	console.log(`Server running at http://${hostname}:${port}/`);
});
const { createServer } = require('node:http');
const hostname = '127.122.120.1';
const port = 4000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Yokosho watashi no soul Society');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
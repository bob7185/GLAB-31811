const http = require('http');

const hostname = '127.0.0.1'
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
//   });


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    if( req.method === 'GET')
    {
        res.write('<p> Congrats! you just made your first request');
    }
    else if(req.method === 'POST')
    {
        console.log('What you got for me today!')

    }
    res.end();
  });
  

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });




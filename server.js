'use strict'
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const PORT = 3000 || process.env;

const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'text/plain'})
    res.write('working')
    res.end()
});



server.listen(PORT,()=>{
    console.log('http://localhost'+ PORT);

})
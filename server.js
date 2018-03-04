'use strict'
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const Senshi = require('./models/senshi.js');

const PORT = 3000 || process.env;


const senshi = [new Senshi('SailorMoon','Usagi Tsukino','Lunar Magic')];


const server = http.createServer((req,res) => {
    console.log('url', req.url);
    res.writeHead(200,{
        'Content-Type':'application/json'
    })
    
    const urlObj = url.parse(req.url);
    console.log('querystring', querystring.parse(urlObj.query));
    if(req.method === 'GET' && urlObj.pathname === '/api/senshi'){
    res.write(JSON.stringify(senshi));
    res.end()
    } else if(req.method === 'GET' && urlObj.pathname === `/api/senshi/?=id`){
        //http://localhost:3000/api/senshi/?id=1//
        //put this in the url//
        res.write(JSON.stringify(senshi));
        res.end()
    } else{
            res.writeHead(404, 'not found');
            res.end();
        };
});






server.listen(PORT,()=>{
    console.log('http://localhost'+ PORT);

})
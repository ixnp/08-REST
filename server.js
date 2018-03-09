'use strict'
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const Senshi = require('./models/senshi.js');

const PORT = 3000 || process.env;
const Router = require('./lib/Router.js');
const firstRouter = require('./lib/ericFristrouter.js');
//test data//
const senshi = [new Senshi('SailorMoon','Usagi Tsukino','Lunar Magic')];


//
const server = http.createServer(firstRouter);


server.listen(PORT,()=>{
    console.log('http://localhost:'+ PORT);

})


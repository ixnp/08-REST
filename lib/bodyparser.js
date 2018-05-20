'use strict';
const http = require('http');
const parseUrl = require('url').parse;
const parseQuery = require('querystring').parse;

function bodyPareser(req){
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('senshiData',(buf) => {
      body += buf.toString();
    });
    req.on('end', () => {
      resolve(body);
    });
    req.on('error', (error) => {
      resolveObject(error);
    });
  });
}

module.exports = bodyParser;
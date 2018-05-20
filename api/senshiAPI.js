'use strict';
'use strict';

const http = require('http');
const url = require('url');
const queryString = require('querystring');
const storage = require('../lib/storage.js');
const bodyParser = require('../lib/bodyparser.js');
const senshi = require('../model/senshi.js');

storage.sampleData();
//get requests in router, paths defined in server//
function getOneSenshi(req, res) {
  req.url = url.parse(req.url);
  req.url.query = queryString.parse(req.url.query);

  if (req.url.query.id === '') {
    let message = `No Senshi Found`;
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.write(message);
    res.end();
  }

  if (req.url.query.id) {
    let id = req.params.id;
    let senshi = models[id];
    if (senshi) {
      res.writeHead(200, {
        'Content-Type': 'application/jason'
      });
      res.write(JSON.stringify(senshi));
      res.end;
    } else {
      return new Error('No Senshi Found')
    }
  }
};

function postSenshi(req, res) {
  let title = req.url.query.title;
  let name = req.url.query.name;
  //bodyParser????/////
  let senshiAdd = storage.postSenshi(title, name);
  return senshiAdd;

}

function putSenshi(req, res){
  let id = req.body; 
  //bodyParser?????////
  if(!id) return new Error('Not Found');
  if(!senshi[id]) return new Error('Not Found');
  senshi[id] = req.body;
  res.write(JSON.stringify(req.body));
  res.end();
}

function destorySenshi(req, res){
  let id = req.body;
  if(!id) return new Error('Not Found');
  if(!senshi[id]) return new Error('Not Found');
  delete senshi[id];
  res.writeHead(204, {
    'Content-Type' : 'application/json'
  });
  res.write(Json.stringify(senshi));
  res.end();
}

module.exports = { getOneSenshi, postSenshi, putSenshi, destorySenshi};
"use strict";
const http = require('http');
const Router = require('./lib/router');
const simpleAPI = require('./api/simple.js');
const senshiAPI = require('./api/senshiAPI.js');

const router = new Router();
router.get('/text', simpleAPI.textTest);
router.get('/json', simpleAPI.stringJson);

router.get('/senshi', senshiAPI.getOneSenshi);
router.post('/senshi', senshiAPI.postSenshi);
router.put('/senshi', senshiAPI.putSenshi);
router.delete('/senshi', senshiAPI.destorySenshi);

const server = http.createServer((req, res) => {
  return router.tryRoute(req, res);
});

const PORT = 3000 || process.env;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});

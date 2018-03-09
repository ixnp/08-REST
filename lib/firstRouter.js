'use strict';
const uuid = require('uuidv4');
const Router = require('./Router');
const myRouter = new Router();

let models = {};
function Senshi(senshi, name, power) {
    this.senshi = senshi;
    this.name = name;
    this.power = power;
    this.id = uuid();
  }


// myRouter.get('/', function(req,res){
//     let {senshi, name, power} = req.body;
//     let sen = new Senshi(senshi, name, power)
//     console.log('get',sen);
//     if(sen){
//         res.writeHead(200,{
//             'Contet-Type': 'application/json'
//         });
//         res.write(JSON.stringify({}));
//         res.end();
//     }else{
//         return new Error("Not Found");
//     }  
// });


// myRouter.getOne('/api/', function(req,res){
//     res.writeHead(200,{
//         'Contet-Type': 'application/json'
//     });
//     res.write(JSON.stringify({}));
//     res.end();
// });

myRouter.post('/', function(req, res) {
    let {first, last, age} = req.body;
    let person = new Person(first, last, age)
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.write(JSON.stringify(person));
      res.end();
    
  });

// myRouter.put('/', function(req,res){
//     res.writeHead(200,{
//         'Contet-Type': 'application/json'
//     });
//     res.write(JSON.stringify({}));
//     res.end();
// });

// myRouter.delete('/', function(req,res){
//     res.writeHead(204,{
//         'Contet-Type': 'application/json'
//     });
//     res.write(JSON.stringify({}));
//     res.end();
// });
//route from Router.js)
module.exports = myRouter.route();

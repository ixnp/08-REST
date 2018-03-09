'use strict';
const bodyParse = require('./bodyparser.js');
const jsonParse = require('./jsonparser.js');

const Router = module.exports = function () {
    this.GET = {},
    this.POST = {},
    this.PUT = {},
    this.DELETE = {}
};
//creating the route method 
Router.prototype.get = function(route,foo){
    this.GET[route] = foo
}
Router.prototype.post = function(route,foo){
    this.POST[route] = foo
}
Router.prototype.put = function(route,foo){
    this.PUT[route] = foo
}
Router.prototype.delete = function(route,foo){
    this.DELETE[route] = foo
}

// creating function to parse what the user entered
//and then find one of the methods above or error

Router.prototype.route = function(){
    return (req,res) => {
        Promise.all([
            bodyParse(req),
            jsonParse(req),
        ])
        .then(() =>{
            let {method} = req;
            let reqType = this[method];
            let callBack = reqType[req.url.pathname]
            if(typeof callBack === 'function') {
                callBack(req,res)
                return;
            }
            console.error('rout not found');
            res.writeHead(400,{
                'Content-Type':'text/plain'
            });
            res.write('rout not found');
            res.end();
        }) 
        .catch(err => {
            console.error('Bad Request');
            res.writeHead(400,{
                'Content-Type':'text/plain'
            });
            res.write('Bad Request',req,res);
            res.end();
            });
        }
    }
 



'use strict';
const superagent = require('superagent');
let SailorMoon = {
  first: "Sailor Neptune",
  last: " Michiru Kaioh",
  age: "Water Magic/Beauty" 
}

let getSailorMoon = {
    
}
const url = 'http://localhost:3000';
function getReq(path){
    return superagent.get(`${url}`+ path)
    .end((err, res) => {
        if(err) return console.error("GET ERROR: ", err.message);
        console.log('GET RES BODY: ', res);  
        console.log('GET RESPONSE: ', res.status);
    });
}

function postReq(obj={}) {
    return superagent.post(`${url}`)
    .send(obj)
    .end((err, res) => {
      if(err) return console.error("POST ERROR: ", err.message);
      console.log('POST RES BODY: ', res.body);  
      console.log('POST RESPONSE STATUS: ', res.status);
      res.body.age += 1;
    });
  }

// function putReq(obj={}){
//     return superagent.put(`${url}`)
//     .send(obj)
//     .end((err, res) => {
//         if(err) return console.error('PUT ERROR:', err.message);
//         console.log('PUT RES BODY:', res.body);
//         console.log('PUT RESPONSE STATUS:', res.status);
//         console.log('n\n\n');
//     });
// }

// function delReq(obj={}){
//     return superagent.delete(`${url}`)
//     .send(obj)
//     .end((err, res) => {
//         if(err) return console.error('DELETE ERROR:', err.message);
//         console.log('DELETE RESPONSE STATUS:', res.status);
//         console.log('n\n\n');
//     });
// }

// getReq();
// postReq();
// putReq();
// delReq();
/// then call it down here // postReq(testdata);
postReq(SailorMoon);
getReq(getSailorMoon);
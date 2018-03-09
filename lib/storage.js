'use strict';

//in memory storage
const Senshi = require('../senshi.js');

let SENSHIS = {};

function seed(){
    SENSHIS = {};
    save(new Senshi('Sailor Uranus','Haruka Tenoh','Strength',));
    save(new Senshi('Sailor Neptun','Michiru Kaioh','Water and Beauty',));
    save(new Senshi('Sailor Saturn','Hotaru Tomoe','Annihilation and Rebirth'));
}
 
function save(senshi){
    SENSHIS(senshi.id) = senshi;
}

function get(id){
    return SENSHIS(id);
}

function getAll(){
    return Object.values(SENSHIS);
}

function remove(id){
    let senshi = get(id);
    delete SENSHIS[id];
    return senshi;
}

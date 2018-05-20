'use strict';

const Senshi = require('../model/Senshi.js');

let SENSTOREOBJ = {};

function sampleData() {
  SENSTOREOBJ = {};

  save(new Senshi('SailorMoon', 'Usagi Tsukino'));

  save(new Senshi('Sailor Mercury', 'Ami Mizuno'));

  save(new Senshi('Sailor Mars', 'Rei Hino'));
  
  save(new Senshi('Sailor Jupiter', ' Makoto Kino'));

  save(new Senshi('Sailor Venus', 'Minako Aino'));
}

function save(senshi) {
  SENSTOREOBJ[senshi.id] = senshi;
}

function get(id) {
  return SENSTOREOBJ[id];
}

function size() {
  let allSenshis = getAll();
  return allSenshis.length;
}

function getAll() {
  return Object.values(SENSTOREOBJ);
}

function update(id, title, name) {
  let senshi = get(id);
  senshi.title = title;
  senshi.name = name;
  return senshi;
}

function destory(id) {
  let senshi = get(id);
  delete SENSTOREOBJ[id];
  return senshi;
}

module.exports = {sampleData, save, get, size, getAll, update, destory};
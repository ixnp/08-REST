'use strict';
const uuid = require('uuid/v4');

class Senshi {
  constructor(title, name) {
    this.id = uuid();
    this.title = title;
    this.name = name
  }
}

module.exports = Senshi;

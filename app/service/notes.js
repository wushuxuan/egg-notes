'use strict';

const Service = require('egg').Service;

class NotesService extends Service {
  async echo() {
    return {
        id:"345",
        name:"yhn123123"
    }
  }
}

module.exports = NotesService;

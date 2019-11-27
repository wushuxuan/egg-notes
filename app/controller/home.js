'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await this.ctx.service.notes.echo();
    ctx.body = res
  }
}

module.exports = HomeController;

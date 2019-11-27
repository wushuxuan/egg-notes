'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await this.ctx.service.notes.echo();
    //ctx.body = res
    //渲染页面 ctx.render
    await ctx.render('notes.html',{res,list:['a1','a2']})
  }
}

module.exports = HomeController;

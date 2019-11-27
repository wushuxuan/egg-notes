'use strict';

const Controller = require('egg').Controller;

class NotesController extends Controller {
  async echo() {
    const { ctx } = this;
    const res = await this.ctx.service.notes.echo();
    ctx.body = res
  }
  //查询
  async httpGetQuery(){
    const { ctx } = this;
    //ctx.query 用于url?id=xxx
    ctx.body = `id = ${ctx.query.id}`
  }

  async httpGetParam(){
    const { ctx } = this;
    //ctx.params 用于url/xxx/xxx
    ctx.body = `id = ${ctx.params.id} ; name = ${ctx.params.name}`
  }

  //创建
  async httpPost(){
    const { ctx } = this;
    //ctx.request.body 用于获取post参数
    const { id,name } = ctx.request.body;
    ctx.body = { id,name }
  }
  
  //更新
  async httpPull(){
    const { ctx } = this;
    //ctx.params 用于获取pull参数
    ctx.body = { 
        id:ctx.params.id
     }
  }

  //删除
  async httpDelete(){
    const { ctx } = this;
    //ctx.params 用于获取delete参数
    ctx.body = { 
        id:ctx.params.id
     }
  }

}

module.exports = NotesController;



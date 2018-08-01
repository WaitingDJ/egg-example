'use strict';

const Controller = require('egg').Controller;

class ClientController extends Controller {
    async index() {
        // pathFor 的第一个参数是路由的名字
        const path = this.ctx.helper.pathFor('adminIndex', {
            name: 'lu'
        })
        const url = this.ctx.helper.urlFor('adminIndex', {
            name: 'lu'
        })

        this.ctx.body = `path: ${path}\nurl: ${url}`;
    }
    async adminIndex() {
        const ctx = this.ctx;
        const result = await ctx.curl(ctx.helper.urlFor('adminIndex'));
        ctx.set(result.headers);
        ctx.body = result.data;
    }
    async adminPost() {
        const ctx = this.ctx;
        //这个adminPost是路由的名字, 不是当前接口的函数名
        const result = await ctx.curl(ctx.helper.urlFor('adminPost'), {
            method: 'POST',
            data: {
                name: ctx.params.name
            }
        })
        ctx.set(result.headers);
        ctx.body = result.data;
    }
}

module.exports = ClientController;
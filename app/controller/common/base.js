'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
    success(data) {
        this.ctx.body = {
            success: true,
            data
        }
    }

    notFound() {
        this.ctx.body = '页面迟到了';
    }
}

module.exports = BaseController;
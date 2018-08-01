'use strict';

const Controller = require('../common/base');
const fs = require('fs');
const path = require('path');

class AdminController extends Controller {
    async index() {
        this.ctx.cookies.set('name', 'lululu', {
            maxAge: 1000 * 60 * 10
        });
        const key = this.config.keys;
        this.success({
            count: this.app.adminNum,
            key
        });
    }

    async postData() {
        this.success(this.ctx.request.body);
    }
    async upload() {
        const ctx = this.ctx;
        const stream = await ctx.getFileStream();
        //存放路径  读取配置中的路径
        const filePath = path.resolve(this.config.uploadDir, stream.filename)
        const ws = fs.createWriteStream(filePath);
        //可读.pipe(可写)
        await stream.pipe(ws);
        ctx.body = '上传成功';
    }
    async download() {
        const ctx = this.ctx;
        const filePath = path.resolve(this.config.uploadDir, '123456.jpg');
        const stream = fs.createReadStream(filePath);
        ctx.attachment('123456.jpg');
        ctx.body = stream;
    }
}

module.exports = AdminController;
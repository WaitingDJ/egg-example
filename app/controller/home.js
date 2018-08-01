const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const ctx = this.ctx;
        const app = this.app;
        // this.ctx.body = this.ctx.cookies.get('name')
        // this.ctx.body = await this.ctx.service.user.admin.find()
        ctx.body = {
            ext: `${ctx.helper.info}`,
            info: `buzhidai`,
            config: app.myConfigs,
            users: app.githubUsers
        }
    }
}
module.exports = HomeController;
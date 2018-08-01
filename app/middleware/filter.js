module.exports = (options, app) => {
    return async function filter(ctx, next) {
        console.log(ctx.get('user-agent'), 'filter.js中的调试log');
        if (ctx.get('user-agent').includes('node')) {
            // if (ctx.get('user-agent').indexOf('node') !== -1) {
            // 重定向外部链接
            ctx.redirect(options.redirectUrl);
        } else {
            await next();
        }
    }
}
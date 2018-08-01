module.exports = (options, app) => {
    app.adminNum = 0;
    return async function count(ctx, next) {
        console.log(ctx.ip);
        if (ctx.ip === '127.0.0.1') {
            app.adminNum += 1
                // app.addCount();
        }
        await next();
    }
}
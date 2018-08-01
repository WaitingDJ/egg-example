module.exports = app => {
    const { router, controller } = app;
    // router.get('/', controller.home.index)
    //router 内部路由跳转
    router.redirect('/', '/admin', 302)

    //获取中间件
    const count = app.middleware.count({}, app);
    router.get('adminIndex', '/admin', count, controller.user.admin.index)
    router.post('adminPost', '/admin/post', count, controller.user.admin.postData);
    router.post('/admin/upload', controller.user.admin.upload);
    router.get('/admin/download', controller.user.admin.download);
}
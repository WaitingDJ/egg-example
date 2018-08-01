module.exports = (app) => {
    const { router, controller } = app;
    // router.get('/', controller.home.index)
    //router 内部路由跳转
    // router.redirect('/', '/admin', 302)
    require('./router/admin')(app);
    // router.get('adminIndex', '/admin', controller.user.admin.index)
    // router.post('adminPost', '/admin/post', controller.user.admin.postData);
    require('./router/client')(app);
    // router.get('/client', controller.client.index);
    // router.get('/client/admin-index', controller.client.adminIndex);
    // router.get('/client/admin-post/:name', controller.client.adminPost);
    require('./router/home')(app);
}
module.exports = app => {
    const { router, controller } = app;
    router.get('/client', controller.client.index);
    router.get('/client/admin-index', controller.client.adminIndex);
    router.get('/client/admin-post/:name', controller.client.adminPost);
}
exports.keys = 'qwe123';
exports.uploadDir = 'D:/'
exports.security = {
    csrf: false
};
exports.mongo = {
    client: {
        host: '127.0.0.1',
        port: '27017',
        name: 'lululus',
        options: {
            useNewUrlParser: true
        }
    }
};
exports.middleware = ['filter'];
exports.filter = {
    redirectUrl: 'https://www.baidu.com'
}
const fs = require('fs');
const path = require('path');

module.exports = app => {
    // 读取配置文件
    const filePath = path.resolve(
        app.config.start.basePath,
        app.config.start.fileName
    );
    //同步读取
    app.myConfigs = JSON.parse(fs.readFileSync(filePath));
    // 通过请求获取数据
    app.beforeStart(async() => {
        const result = app.curl('https://api.github.com/users', {
            dataType: 'json'
        });
        app.githubUsers = result;
    })
}
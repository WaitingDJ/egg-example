const path = require('path');

exports.mongo = {
    enable: true,
    package: 'egg-mongo-native'
};
exports.ext = {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-ext')
};
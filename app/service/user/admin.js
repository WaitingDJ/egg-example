'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
    async find() {
        const result = this.app.mongo.db
            .collection('lu')
            .find({})
            .toArray();
        return result;
    }
}

module.exports = AdminService;
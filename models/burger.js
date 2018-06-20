const orm = require('../config/orm.js');

const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (value, cb) {
        orm.insertOne("burgers", "name", value, function (res) {
            cb(res);
        });
    },
    update: function (id, cb) {
        orm.updateOne("burgers", "is_eaten", true, "id = " + id, function (res) {
            cb(res);
        });
    },
}

module.exports = burger;

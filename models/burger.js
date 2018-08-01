var orm = require("../config/orm");

var burger = {
    selectAll: function (input, cb) {
        orm.selectAll(input, function (result) {
            cb(result);
        });
    },
    create: function (input, burgerName, devoured, cb) {
        orm.create(input, burgerName, devoured, function (result) {
            cb(result);
        });
    },
    update: function (input, objColVals, condition, cb) {
        orm.update(input, objColVals, condition, function (result) {
            cb(result);
        });
    }
}

module.exports = burger;
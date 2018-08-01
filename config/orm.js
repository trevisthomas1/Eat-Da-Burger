var connection = require("./connection");

function objToSql(ob) {

    var arr = [];

    for (var key in ob) {
        arr.push(key + '=' + ob[key]);
    }

    return arr.toString();
}

var orm = {
    selectAll: function (input, cb) {
        var queryStr = 'SELECT * FROM ' + input + ';';
        connection.query(queryStr, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function (input, burgerName, devoured, cb) {
        var queryStr = 'INSERT INTO ' + input + ' (burger_name, devoured) ';
        queryStr += 'VALUES ("' + burgerName + '", ' + devoured + ');';

        console.log(queryStr);

        connection.query(queryStr, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryStr = 'UPDATE ' + table;

        queryStr += ' SET ';
        queryStr += objToSql(objColVals);
        queryStr += ' WHERE ';
        queryStr += condition;

        console.log(queryStr)

        connection.query(queryStr, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
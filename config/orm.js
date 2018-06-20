const connection = require("../config/connection.js");

var orm = {

    selectAll: function(table, cb){
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function (err, result) {
            if (err) {throw err;};
            cb(result);
        });
    },
    insertOne: function (table, column, value, cb) {
        let queryString = `INSERT INTO ${table} (${column.toString()}) VALUES ("${value.toString()}");`;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {throw err;};
            cb(result);
        });
    },
    updateOne: function (table, column, value, condition, cb) { 
        let queryString = `UPDATE ${table.toString()} SET ${column.toString()} = ${value} WHERE ${condition.toString()};`;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) { throw err; };
            cb(result);
        });
    }
};

module.exports = orm;
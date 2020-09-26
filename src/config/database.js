const mysql = require('mysql');

const connMySQL = function () {
    return mysql.createConnection({
        host: process.env.DATABASE_URL,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    });
};

module.exports = () => connMySQL;
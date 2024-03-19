const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '192.168.30.23',
    user: 'root',
    database: 'coches',
    password: ''
});

module.exports = pool.promise();
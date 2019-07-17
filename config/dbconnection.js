var db = require('mysql');

var connection = function(){
    return db.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'daggerfall',
        database: 'portal_noticias'
    });
};

module.exports = function(){
    return connection;
}
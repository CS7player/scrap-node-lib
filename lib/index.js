require('./config');
exports.pbkdf = require('./pbkdf');
exports.jwt = require('./jwt');
if(DB_TYPE == 1){
 exports.mongo = require('./../mongoose');
} else {
 exports.mysql2  = require('./../mysql2');
}
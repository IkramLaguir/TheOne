const mongoose  = require('mongoose');
const dbConfig = require('../config/db.config');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.uri = dbConfig.uri;
db.user = require('./user');//(mongoose);

db.infoUser = require('./infoUser');//(mongoose);


module.exports = db;

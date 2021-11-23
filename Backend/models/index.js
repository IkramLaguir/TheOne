const mongoose  = require('mongoose');
const dbConfig = require('../config/db.config');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.uri = dbConfig.uri;


db.user = require('./user/user');//(mongoose)
db.infoUser = require('./user/infoUser');//(mongoose)

db.admin = require('./admin/admin');//(mongoose)


db.advertiser = require('./advertiser/advertiser');//(mongoose)
module.exports = db;

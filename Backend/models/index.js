const mongoose  = require('mongoose');
const dbConfig = require('../config/db.config');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.uri = dbConfig.uri;


db.user = require('./user/user');//(mongoose)
db.infoUser = require('./user/infoUser');//(mongoose)
db.playlist = require('./user/playlist');


db.advertiser = require('./advertiser/advertiser');//(mongoose)
db.advert = require('./advertiser/advert');


db.admin = require('./admin/admin');//(mongoose)


module.exports = db;

const mongoose  = require('mongoose');
const dbConfig = require('../config/db.config');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.uri = dbConfig.uri;


db.user = require('./user/user');
db.playlist = require('./user/playlist');


db.advertiser = require('./advertiser/advertiser');
db.advert = require('./advertiser/advert');


db.admin = require('./admin/admin');


module.exports = db;

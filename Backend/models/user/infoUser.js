const mongoose = require('mongoose');
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');

const infoSchema = new mongoose.Schema({
    user : [{ type: Schema.Types.ObjectId, ref: 'User' }],
    user_name:{type: String, required: true, unique:true},
    pays:{type: String, required: true},
    date_of_birth:{type: String, required: true},
    interest:{type: [String], required: true},
  },
  { 
    timestamps: true 
  }

);
infoSchema.plugin(uniqueValidator);


const InfoUser = mongoose.model('InfoUser', infoSchema);
module.exports = InfoUser 
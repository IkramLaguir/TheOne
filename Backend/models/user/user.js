const mongoose = require('mongoose');
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  info:{
    user_name:{type: String, required: true, unique:true},
    pays:{type: String, required: true},
    date_of_birth:{type: String, required: true},
    interest:{type: [String], required: true},
  },

  },
  { 
    timestamps: true 
  } 
);

userSchema.virtual('age').get(function(){
  return Math.floor((Date.now() - this.info.date_of_birth.getTime()) / (1000 * 3600 * 24 * 365));
});

userSchema.plugin(uniqueValidator);


const user = mongoose.model('User', userSchema);

module.exports = user;
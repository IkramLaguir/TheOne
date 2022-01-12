const mongoose = require('mongoose');
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');


const adverstiserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_name:{type: String, required: true, unique:true},
});

adverstiserSchema.plugin(uniqueValidator);


const adverstiser = mongoose.model('Adverstiser', adverstiserSchema);

module.exports = adverstiser;
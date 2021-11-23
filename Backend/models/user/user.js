const mongoose = require('mongoose');
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);


const user = mongoose.model('User', userSchema);

module.exports = user;







// var authorSchema = Schema({
//     name    : String,
//     stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }]
//   });
  
//   var storySchema = Schema({
//     author : { type: Schema.Types.ObjectId, ref: 'Author' },
//     title    : String
//   });
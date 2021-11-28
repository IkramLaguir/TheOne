const mongoose = require('mongoose');
const Schema = mongoose.Schema

const playlistSchema = new mongoose.Schema({
    user : [{ type: Schema.Types.ObjectId, ref: 'User' }],
    name :{type: String, required: true},
    list_video: [//{type: [Object], required: false}
      {
        creator : {type: String, required: false},
        description : {type: String, required: false},
        titre : {type: String, required: false},
        url : {type: String, required: false}
      }
    ]//{type: [Object], required: false},
  },
  { 
    timestamps: true 
  }

);


const Playlist = mongoose.model('PlaylistUser', playlistSchema);
module.exports = Playlist
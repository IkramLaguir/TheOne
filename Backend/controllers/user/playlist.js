//const User = require('../models/user')
const db = require('../../models/index')

const Playlist = db.playlist

const {sendError, sendMessage} = require ("../../message");



//create a playlist with video and without
exports.create =  async(req, res, next) => {
    const playlist = {
        user : req.body.userId,
        name : req.body.titre
    }
    if (req.body.list) {
        playlist.list_video = req.body.list;
    }
    const playlistModel = new Playlist(playlist);
    
    await playlistModel.save()
        .then(() => sendMessage(res,{ message: 'Playlist créé !' }))
        .catch(error => sendError(res ,{ 'error': error.stack }));   
};


//Get all playlist of a user
exports.playlists = (req,res,next)=> {
    const userId = req.params.userId;
    Playlist.find({user : userId})
        .then(data => sendMessage(res,data))
        .catch(error => sendError(res, { 'error': error.stack  }));
}

//del a playlist
exports.deletePlaylist = (req,res,next) =>{
    const playlistId = req.params.playlistId;
    Playlist.deleteOne({_id : playlistId})
        .then(() => sendMessage(res,{ message: 'Playlist supprimée !' }))
        .catch(error => sendError(res, { 'error': error.stack  }));
}


//add a video to a playlist
exports.addVideo = (req,res,next) =>{
    const playlistId = req.body.playlistId;
    const video = req.body.list;
    Playlist.findById(playlistId,async(error,data)=>{
        if(error){
            sendError(res ,{ 'error': error.stack });
        }
        data.list_video.push(video);
        await data.save()
            .then(() => sendMessage(res,{ message: 'Vidéo ajoutée !' }))
            .catch(error => sendError(res, { 'error': error.stack  }));
    })
}

//Get all videos of a playlist
exports.videos = (req,res,next)=> {
    const playlistId = req.params.playlistId;
    Playlist.find({_id : playlistId})
        .then(data => sendMessage(res,data))
        .catch(error => sendError(res, { 'error': error.stack  }));
}

//del a video from a playlist
exports.deleteVideo = (req,res,next) =>{
    const playlistId = req.body.playlistId;
    const videoId = req.body.videoId;
    Playlist.findById(playlistId,async(error,data)=>{
        if(error){
            sendError(res ,{ 'error': error.stack });
        }
        data.list_video.pull({ _id: videoId });

        await data.save()
            .then(() => sendMessage(res,{ message: 'Video supprimée !' }))
            .catch(error => sendError(res, { 'error': error.stack  }));
    })  
}



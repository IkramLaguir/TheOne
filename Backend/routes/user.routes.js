// ici, on met en place les routes qui seront servies par le serveur web :
// chaque route correspond à un fichier que l'on charge via un require. Ce
// fichier exporte juste une fonction, que l'on appelle quand l'utilisateur
// demande à accéder à la route.
module.exports = app =>{
    //const userCtrl = require("../controllers/user");
    const {sendError, sendMessage} = require ("../message");
    var router = require("express").Router();

    const auth = require('../middleware/auth');
    const userCtrl = require ('../controllers/user/user');
    const playlistCtrl = require('../controllers/user/playlist');

    router.get('/',(req,res)=> {
        //sendMessage(res,"Welcome to The One!");
        sendMessage(res,"Welcome to The One!");
    })

    router.post('/signup', (req, res) => { 
        userCtrl.signup(req,res); 
    });

    router.post('/login', (req, res) => { 
        userCtrl.login(req,res); 
        //req.auth = res.data.userId;
    });

    //Create a Playlist:
    router.post('/create', (req, res) => { 
        playlistCtrl.create(req,res); 
    });

    //Get all playlist of a user
    router.get('/playlists', (req, res) => { 
        playlistCtrl.playlists(req,res); 
    });

    //Add a video to a Playlist:
    router.post('/addVideo', (req, res) => { 
        playlistCtrl.addVideo(req,res); 
    });

    //Get all playlist of a user
    router.get('/videos', (req, res) => { 
        playlistCtrl.videos(req,res); 
    });

    //Delete a video from a playlist
    router.delete('/deleteVideo', (req, res) => { 
        playlistCtrl.deleteVideo(req,res); 
    });

    // Delete a playlist
    router.delete('/deletePlaylist', (req, res) => { 
        playlistCtrl.deletePlaylist(req,res); 
    });

    app.use('/api/user',router);
}

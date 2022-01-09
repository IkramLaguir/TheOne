// ici, on met en place les routes qui seront servies par le serveur web :
// chaque route correspond à un fichier que l'on charge via un require. Ce
// fichier exporte juste une fonction, que l'on appelle quand l'utilisateur
// demande à accéder à la route.
module.exports = app =>{
    //const userCtrl = require("../controllers/user");
    const {sendError, sendMessage} = require ("../message");
    var router = require("express").Router();


    router.get('/',(req,res)=> {
        //sendMessage(res,"Welcome to The One!");
        sendMessage(res,"Welcome to The One!");
    })

    const auth = require('../middleware/auth');
    const adminCtrl = require ('../controllers/admin/admin');

    router.post('/signup', (req, res) => { 
        adminCtrl.signup(req,res); 
    });


    router.post('/login', (req, res) => { 
        adminCtrl.login(req,res); 
    });

    router.get('/getAdvert/:id', (req, res) => {
        adminCtrl.getAdvert(req,res); 
    });
    
    router.post('/updateAdvert', (req, res) => { 
        adminCtrl.updateAdvert(req,res); 
    });

    router.get('/ad/:id', (req, res) => {
        adminCtrl.getOneAdvert(req, res);
    });


    app.use('/api/admin',router);
}

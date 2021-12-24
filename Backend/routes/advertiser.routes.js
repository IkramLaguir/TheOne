// ici, on met en place les routes qui seront servies par le serveur web :
// chaque route correspond à un fichier que l'on charge via un require. Ce
// fichier exporte juste une fonction, que l'on appelle quand l'utilisateur
// demande à accéder à la route.
module.exports = (app) => {
    //const userCtrl = require("../controllers/user");
    const { sendError, sendMessage } = require('../message');
    var router = require('express').Router();

    const auth = require('../middleware/auth');
    const advertiserCtrl = require('../controllers/advertiser/advertiser');

    router.get('/', (req, res) => {
        //sendMessage(res,"Welcome to The One!");
        sendMessage(res, 'Welcome to The One!');
    });

    router.post('/signup', (req, res) => {
        advertiserCtrl.signup(req, res);
    });

    router.post('/login', (req, res) => {
        advertiserCtrl.login(req, res);
    });

    router.post('/create', (req, res) => {
        advertiserCtrl.create(req, res);
    });

    router.get('/getAdvert/:id', (req, res) => {
        advertiserCtrl.getAdvert(req, res);
    });

    router.get('/ad/:id', (req, res) => {
        advertiserCtrl.getOneAdvert(req, res);
    });

    router.delete('/ad/:id', (req, res) => {
        advertiserCtrl.deleteOneAdvert(req, res);
    });

    app.use('/api/advertiser', router);
};

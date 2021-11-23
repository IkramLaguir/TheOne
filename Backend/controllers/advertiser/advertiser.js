//const User = require('../models/user')
const db = require('../../models/index')

const Advertiser = db.advertiser

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const {sendError, sendMessage} = require ("../../message");

exports.signup =  (req, res, next) => {
    //console.log(req.body);
    bcrypt.hash(req.body.password, 10)
        .then(async (hash) => {

            const advertiser = {
                email: req.body.email,
                password: hash,
                user_name : req.body.userName,

            }

            const advertiserModel = new Advertiser(advertiser);
            
            await advertiserModel.save()
                .then(() => sendMessage(res,{ message: 'Utilisateur créé !' }))
                .catch(error => sendError(res ,{ 'error': error.stack }));
                


        })
        .catch(error => sendError(res ,{ 'error': error.stack }));        
  };


exports.login = (req, res, next) => {
    Advertiser.findOne({ email: req.body.email })
        .then(advertiser => {
        if (!advertiser) {
            return sendError(res, { error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, advertiser.password)
            .then(valid => {
                if (!valid) {
                    return sendError(res, { error: 'Mot de passe incorrect !' });
                }
                sendMessage(res,{
                    advertiserId: advertiser._id,
                    token: jwt.sign(
                        { advertiserId: advertiser._id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                        )
                });
                })
                .catch(error => sendError(res, { error }));
            })
            .catch(error => sendError(res, { error }));
};
//const User = require('../models/user')
const db = require('../../models/index')

const User = db.user
const InfoUser = db.infoUser

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const {sendError, sendMessage} = require ("../../message");

exports.signup =  (req, res, next) => {
    //console.log(req.body);
    bcrypt.hash(req.body.password, 10)
        .then(async (hash) => {

            const user = {
                email: req.body.email,
                password: hash
            }

            const userModel = new User(user);
            
            await userModel.save()
                .then(() => sendMessage(res,{ message: 'Utilisateur créé !' }))
                .catch(error => sendError(res ,{ 'error': error.stack }));
                

            const infoUser = new InfoUser({
                user_name : req.body.userName,
                pays : req.body.pays,
                date_of_birth : req.body.dateOfBirth,
                interest : req.body.interest,
                user : userModel._id
            })

            await infoUser.save()
                .then(() => sendMessage(res,{ message: 'Utilisateur créé !' }))
                .catch(error => sendError(res, { 'error': error.stack  }));

        })
        .catch(error => sendError(res ,{ 'error': error.stack }));        
  };


exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
        if (!user) {
            return sendError(res, { error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return sendError(res, { error: 'Mot de passe incorrect !' });
                }
                sendMessage(res,{
                    userId: user._id,
                    token: jwt.sign(
                        { userId: user._id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                        )
                });
                })
                .catch(error => sendError(res, { error }));
            })
            .catch(error => sendError(res, { error }));
};
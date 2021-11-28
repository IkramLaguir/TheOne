//const User = require('../models/user')
const db = require('../../models/index')

const Admin = db.admin

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const {sendError, sendMessage} = require ("../../message");

exports.signup =  (req, res, next) => {
    //console.log(req.body);
    bcrypt.hash(req.body.password, 10)
        .then(async (hash) => {

            const admin = {
                email: req.body.email,
                password: hash
            }

            const adminModel = new Admin(admin);
            
            await adminModel.save()
                .then(() => sendMessage(res,{ message: 'Administrateur créé !' }))
                .catch(error => sendError(res ,{ 'error': error.stack }));
                


        })
        .catch(error => sendError(res ,{ 'error': error.stack }));        
  };


exports.login = (req, res, next) => {
    Admin.findOne({ email: req.body.email })
        .then(admin => {
        if (!admin) {
            return sendError(res, { error: 'Admin non trouvé !' });
        }
        bcrypt.compare(req.body.password, admin.password)
            .then(valid => {
                if (!valid) {
                    return sendError(res, { error: 'Mot de passe incorrect !' });
                }
                sendMessage(res,{
                    adminId: Admin._id,
                    token: jwt.sign(
                        { adminId: admin._id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                        )
                });
                })
                .catch(error => sendError(res, { error }));
            })
            .catch(error => sendError(res, { error }));
};
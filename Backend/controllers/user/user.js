//const User = require('../models/user')
const db = require('../../models/index')

const User = db.user
//const InfoUser = db.infoUser
const Advert = db.advert

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const {sendError, sendMessage} = require ("../../message");

exports.signup =  (req, res, next) => {
    //console.log(req.body);
    bcrypt.hash(req.body.password, 10)
        .then(async (hash) => {

            const user = {
                email: req.body.email,
                password: hash,
                info:{
                    user_name : req.body.userName,
                    pays : req.body.pays,
                    date_of_birth : req.body.dateOfBirth,
                    interest : req.body.interest,
                }
            }
            console.log(user);
            const userModel = new User(user);

            await userModel.save()
                .then(() => sendMessage(res,{ message: 'Utilisateur créé !' }))
                .catch(error => sendError(res ,{ 'error': error.stack }));
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


//Get an Advert when the user is loggedIn
exports.getAdvert = (req,res,next)=> {
    const userId = req.params.userId;
    User.findOne({_id : userId}).select({info :1})
        .then(data =>{
            data = data.info;
            const date = new Date(data.date_of_birth)
            age = Math.floor((Date.now() - date.getTime()) / (1000 * 3600 * 24 * 365));
            const interest = data.interest;
            Advert.find({minAge:{$lte:age}, categorie:{$in:interest},status:"Accepté"}).select({_id :1})
                .then(data => {
                    const tmp = data[Math.floor(Math.random()*data.length)];
                    Advert.findOneAndUpdate({ _id:tmp["_id"]},{ $inc: {'nbOfVues': 1 } }).select({text :1})
                        .then(data => sendMessage(res,data))
                        .catch(error => sendError(res ,{ 'error': error.stack }));
                })
                .catch(error => sendError(res, { 'error': error.stack  }));
        })
        .catch(error => sendError(res, { 'error': error.stack  }));

}

// Get an advert when the user is not logged In

exports.getAdvertNoConnected = (req,res,next)=> {
    Advert.find({status:"Accepté"}).select({_id :1})
        .then(data => {
            const tmp = data[Math.floor(Math.random()*data.length)];
            Advert.findOneAndUpdate({ _id:tmp["_id"]},{ $inc: {'nbOfVues': 1 } }).select({text :1})
                .then(data => sendMessage(res,data))
                .catch(error => sendError(res ,{ 'error': error.stack }));

        })
        .catch(error => sendError(res, { 'error': error.stack  }));



}

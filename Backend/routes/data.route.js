module.exports = app =>{
    const {sendError, sendMessage} = require ("../message");
    var router = require("express").Router();

    const dataCtrl = require('../controllers/generateData/generateData')

    router.get('/',(req,res)=> {
        dataCtrl.main(req,res);
        sendMessage(res,"Welcome to The One!");
    })

    app.use('/api/data',router);
}

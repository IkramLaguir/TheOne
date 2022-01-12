const db = require('../../models/index')
const User = db.user

var faker = require('faker');
const bcrypt = require('bcrypt')
const {sendError, sendMessage} = require ("../../message");


// Generate data:

const generateNb =  (min, max)=>{
    return Math.floor(Math.random()*(max - min + 1))+ min;
}

const generateInterest =()=>{
    const L = ['Sport','Technologie','Divertissement', 'Commerce']
    const tmp = generateNb(0,3);
    return L[tmp]
}

const generateCountry =()=>{
    const L = ['France','Italie','Espagne']
    const tmp = generateNb(0,2);
    return L[tmp]
}
const formatDate = (date)=>{
    let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    return formatted_date;
}



const addToDb = async(user)=>{
    const userModel = new User(user);
    await userModel.save()
        .catch(error => console.log({ 'error': error.stack }));
}

const generateUser = async()=>{

        let userName = faker.internet.userName();
        let email = faker.internet.email(userName);
        let password = faker.internet.password();
        password = await bcrypt.hash(password, 10);

        let pays = generateCountry();
        let interest = generateInterest();
        let birthdaytmp = faker.date.past(80);
        let dateOfBirth = formatDate(birthdaytmp)

        const user = {
            email: email,
            password: password,
            info:{
                user_name : userName,
                pays : pays,
                date_of_birth : dateOfBirth,
                interest : interest,
            }
        }
    return user
}


exports.main = async()=>{
    for (let id=1; id <= 10000; id++) {
        console.log(id)
        const user = await generateUser();
        addToDb(user);
    }

}
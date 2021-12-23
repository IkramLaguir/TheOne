const mongoose = require('mongoose');
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');


const advertSchema = new Schema({
        advertiser : { type: Schema.Types.ObjectId, ref: 'Advertiser' },
        title: { type: String, required: true},
        minAge: { type: String, required: true},
        country: { type: String, required: true},
        category:{type: [String], required: true},
        text: { type: String, required: true},
        status : { type: String, required: true},
        nbOfVues: {type: Number, default: 0},
    },
    {
        timestamps: true
    }

);

advertSchema.plugin(uniqueValidator);


const advert = mongoose.model('Advert', advertSchema);

module.exports = advert;

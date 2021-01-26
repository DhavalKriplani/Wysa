const mongoose = require('mongoose');

const therapists = mongoose.Schema({
    name:{
        type:String
    },
    uniqueId:{
        type:String
    }
});

module.exports = Therapists = mongoose.model('therapists', therapists);

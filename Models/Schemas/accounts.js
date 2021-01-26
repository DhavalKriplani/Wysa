const mongoose = require('mongoose');

const accounts = mongoose.Schema({
    nickname:{
        type:String
    },
    uniqueId:{
        type:String
    },
    subscription:{
        type:String
    },
    userSettings:{
        type:Object
    },
    totp:{
        type:Number
    }
});

module.exports = Accounts = mongoose.model('accounts', accounts);

const mongoose = require('mongoose');

const devices = mongoose.Schema({
    userId:{
        type:String
    },
    deviceInfo:{
        type:Object
    },
    primaryDevice:{
        type:Boolean
    }
});

module.exports = Devices = mongoose.model('devices', devices);

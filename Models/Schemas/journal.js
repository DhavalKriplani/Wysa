const mongoose = require('mongoose');

const journal = mongoose.Schema({
    userId:{
        type:String
    },
    userData:{
        type:Object
    }
});

module.exports = Journal = mongoose.model('journal', journal);

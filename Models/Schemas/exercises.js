const mongoose = require('mongoose');

const exercises = mongoose.Schema({
    uniqueId:{
        type:String
    },
    name:{
        type:String
    },
    views:{
        type:Number
    }
});

module.exports = Exercises = mongoose.model('exercises', exercises);

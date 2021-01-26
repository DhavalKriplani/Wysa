const Exercises = require('../Schemas/exercises');
const { v4: uuidV4 } = require('uuid');

const addExerciseDetails = async (name) => {
    let exercise = {};
    exercise.name = name;
    exercise.uniqueId = uuidV4();
    exercise.views = 0;
    let exercises = new Exercises(exercise);
    try {
        await exercises.save();
    } catch (err) {
        return {"message": err}
    }
    return exercises
};

const getAllExercises = async () => {
    try{
        return await Exercises.find()
    } catch (err) {
        return {"message": err}
    }
};

const getExerciseDetails = async (uniqueId) => {
    try{
        return await Exercises.findOne({uniqueId: uniqueId})
    } catch (err) {
        return {"message": err}
    }
};

const updateExerciseViews = async (uniqueId, views) => {
    try{
        return await Exercises.updateOne({uniqueId: uniqueId}, {$set: {views: views}})
    } catch (err) {
        return {"message": err}
    }
};

exports.addExerciseDetails = addExerciseDetails;
exports.getAllExercises = getAllExercises;
exports.getExerciseDetails = getExerciseDetails;
exports.updateExerciseViews = updateExerciseViews;

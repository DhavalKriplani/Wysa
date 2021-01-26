const validators = require('../helpers/validators');
const errorHandling = require('../helpers/errorHandling');
const exercises = require('../Models/Methods/exercises');

const addExercise = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.name);
    };

    const areParamsNonNull = (params) =>{
        return params.name;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await exercises.addExerciseDetails(params.name);
};

const getAllExercises = async () => {
    return await exercises.getAllExercises();
};

const getExercise = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.uniqueId);
    };

    const areParamsNonNull = (params) =>{
        return params.uniqueId;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await exercises.getExerciseDetails(params.uniqueId);
};

const updateExerciseViews = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.uniqueId);
    };

    const areParamsNonNull = (params) =>{
        return params.uniqueId;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    let exercise = exercises.getExerciseDetails(params.uniqueId);

    return await exercises.updateExerciseViews(params.uniqueId, exercise.views += 1);
};

exports.addExercise = addExercise;
exports.getAllExercises = getAllExercises;
exports.getExercise = getExercise;
exports.updateExerciseViews = updateExerciseViews;

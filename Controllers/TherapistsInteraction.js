const validators = require('../helpers/validators');
const errorHandling = require('../helpers/errorHandling');
const therapists = require('../Models/Methods/therapists');

const addTherapist = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.name);
    };

    const areParamsNonNull = (params) =>{
        return params.name;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await therapists.addTherapistDetails(params.name);
};

const getAllTherapists = async () => {
    return await therapists.getAllTherapists();
};

const getTherapist = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.uniqueId);
    };

    const areParamsNonNull = (params) =>{
        return params.uniqueId;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await therapists.getTherapistDetails(params.uniqueId);
};

exports.addTherapist = addTherapist;
exports.getAllTherapists = getAllTherapists;
exports.getTherapist = getTherapist;

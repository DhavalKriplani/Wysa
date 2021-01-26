const validators = require('../helpers/validators');
const errorHandling = require('../helpers/errorHandling');
const journal = require('../Models/Methods/journal');

const addJournal = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.userId);
    };

    const areParamsNonNull = (params) =>{
        return params.userId;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await journal.addJournalDetails(params.userId);
};

const getAllJournals = async () => {
    return await journal.getAllJournals();
};

const getUserJournal = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.userId);
    };

    const areParamsNonNull = (params) =>{
        return params.userId;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await journal.getUserJournalDetails(params.userId);
};

const updateJournal = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.userId)
            && validators.isNonNullObject(params.userData);
    };

    const areParamsNonNull = (params) =>{
        return params.userId
            && params.userData;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await journal.updateJournalDetails(params.userId, params.userData);
};

exports.addJournal = addJournal;
exports.getAllJournals = getAllJournals;
exports.getUserJournal = getUserJournal;
exports.updateJournal = updateJournal;

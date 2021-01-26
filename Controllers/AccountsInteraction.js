const validators = require('../helpers/validators');
const errorHandling = require('../helpers/errorHandling');
const accounts = require('../Models/Methods/accounts');

const addUser = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.nickname);
    };

    const areParamsNonNull = (params) =>{
        return params.nickname;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await accounts.addUserDetails(params.nickname);
};

const getAllUsers = async () => {
    return await accounts.getAllUsers();
};

const getUser = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.uniqueId);
    };

    const areParamsNonNull = (params) =>{
        return params.uniqueId;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await accounts.getUserDetails(params.uniqueId);
};

exports.addUser = addUser;
exports.getAllUsers = getAllUsers;
exports.getUser = getUser;

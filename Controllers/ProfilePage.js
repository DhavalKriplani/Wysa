const validators = require('../helpers/validators');
const errorHandling = require('../helpers/errorHandling');
const accounts = require('../Models/Methods/accounts');
const utils = require('../helpers/utils');

const loadTemplate = async (params) => {
    return {"render": "profilePage", "params": params}
};

const formSubmit = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.uniqueId)
            && validators.isNonEmptyString(params.nickname);
    };

    const areParamsNonNull = (params) => {
        return params.uniqueId
            && params.nickname;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    const totp = utils.generateTOTP(params.uniqueId);
    const userDetails = await accounts.updateTOTP(params.uniqueId, totp);
    console.log(userDetails);
    return {"redirect": "/profilePage", "params": {"totp": totp, "nickname": params.nickname, "uniqueId": params.uniqueId}}
};

exports.loadTemplate = loadTemplate;
exports.formSubmit = formSubmit;

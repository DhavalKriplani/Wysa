const validators = require('../helpers/validators');
const errorHandling = require('../helpers/errorHandling');
const accounts = require('../Models/Methods/accounts');
const utils = require('../helpers/utils');

const codeGeneration = async (params) => {
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
    return totp;
};

const codeVerification = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.nickname)
            && validators.isNonEmptyString(params.totp);
    };

    const areParamsNonNull = (params) =>{
        return params.nickname
            && params.totp;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    const userDetails = await accounts.getTOTP(params.nickname, params.totp);
    if(userDetails == null)
        return {"message": "Invalid TOTP!"};
    else {
        const uniqueId = userDetails.uniqueId;
        const totp = userDetails.totp;

        const currentTOTP = utils.generateTOTP(uniqueId);
        console.log(currentTOTP);
        if(currentTOTP === totp.toString()){
            return {"success": true, "message": "You can call all the related APIs now to start data porting!"}
        }
        else {
            return {"message": "TOTP Expired!"};
        }
    }
};

exports.codeGeneration = codeGeneration;
exports.codeVerification = codeVerification;

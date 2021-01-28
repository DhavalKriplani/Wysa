const validators = require('../helpers/validators');
const errorHandling = require('../helpers/errorHandling');
const accounts = require('../Models/Methods/accounts');
const utils = require('../helpers/utils');

const loadTemplate = async (params) => {
    return {"render": "verifyCode", params: params}
};

const formSubmit = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.username)
            && validators.isNonEmptyString(params.totp);
    };

    const areParamsNonNull = (params) =>{
        return params.username
            && params.totp;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    const userDetails = await accounts.getTOTP(params.username, params.totp);
    console.log(userDetails);
    if(userDetails == null)
        return {"message": "Invalid TOTP!"};
    else {
        const uniqueId = userDetails.uniqueId;
        const totp = userDetails.totp;

        const currentTOTP = utils.generateTOTP(uniqueId);
        console.log(currentTOTP);
        if(currentTOTP === totp.toString()){
            const accessToken = utils.createAccessToken({"un": params.username, "id": uniqueId});
            console.log(accessToken);
            return {"redirect": "/verifyCode", "params": {"nickname": params.username, "uniqueId": uniqueId}, "cookie": accessToken}
        }
        else {
            return {"redirect": "/verifyCode", "params": {"message": "TOTP Expired!"}}
        }
    }
};

exports.loadTemplate = loadTemplate;
exports.formSubmit = formSubmit;

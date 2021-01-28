const validators = require('../helpers/validators');
const errorHandling = require('../helpers/errorHandling');
const accounts = require('../Models/Methods/accounts');
const journal = require('../Models/Methods/journal');
const utils = require('../helpers/utils');

const loadTemplate = async () => {
    return {"render": "signUp"}
};

const formSubmit = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.username);
    };

    const areParamsNonNull = (params) =>{
        return params.username;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    const userDetails = await accounts.addUserDetails(params.username);
    const journalDetails = await journal.addJournalDetails(userDetails.uniqueId);
    console.log(journalDetails);
    const accessToken = utils.createAccessToken({"un": params.username, "id": userDetails.uniqueId});
    console.log(accessToken);
    return {"redirect": "/profilePage", "params": {"nickname": params.username, "uniqueId": userDetails.uniqueId}, "cookie": accessToken}
};

exports.loadTemplate = loadTemplate;
exports.formSubmit = formSubmit;

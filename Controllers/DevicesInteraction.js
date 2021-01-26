const validators = require('../helpers/validators');
const errorHandling = require('../helpers/errorHandling');
const devices = require('../Models/Methods/devices');

const addDevice = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.userId)
            && validators.isNonNullObject(params.deviceInfo)
            && validators.isBoolean(params.primaryDevice);
    };

    const areParamsNonNull = (params) =>{
        return params.userId
            && params.deviceInfo
            && params.primaryDevice != null;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await devices.addDeviceDetails(params.userId, params.deviceInfo, params.primaryDevice);
};

const getAllDevices = async () => {
    return await devices.getAllDevices();
};

const getAllUserDevices = async (params) => {
    const areParametersValid = params => {
        return validators.isNonEmptyString(params.userId);
    };

    const areParamsNonNull = (params) =>{
        return params.userId;
    };

    if(!(validators.isNonNullObject(params) && areParamsNonNull(params))) return errorHandling.MISSING_PARAMS;

    if(!areParametersValid(params)) return errorHandling.INVALID_PARAMS;

    return await devices.getUserDevices(params.userId);
};

exports.addDevice = addDevice;
exports.getAllDevices = getAllDevices;
exports.getAllUserDevices = getAllUserDevices;

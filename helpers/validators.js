const isArray = param => {return Array.isArray(param)};

const isEmptyArray = array => {return isArray(array) && array.length === 0};

const isNonNullArray = param => {return isArray(param) && param.length !== 0};

const isObject = param => {return param !== null && isType(param,'object') && !isArray(param)};

const isEmptyObject = param => {return isObject(param) && Object.keys(param).length === 0};

const isNonNullObject = param => {return isObject(param) && Object.keys(param).length !== 0};

const isString = param => {return param != null && isType(param,'string')};

const isEmptyString = param => {return isString(param) && param.trim().length === 0};

const isNonEmptyString = param => {return isString(param) && param.trim().length !== 0};

const isStringNA = string => {return isNonEmptyString(string) && string.includes('N/A')};

const isStringNotNA = string => {return isNonEmptyString(string) && !string.includes('N/A')};

const isEmailValidString = email => {return isStringNotNA(email)};

const isPhoneValidString = phone => {return isStringNotNA(phone)};

const isAlphabeticalString = param => {return isNonEmptyString(param) && /^[a-z]+$/i.test(param)};

const isNumericalString = param => {return isNonEmptyString(param) && /^[0-9]+$/.test(param)};

const isAlphaNumericString = param => {return isNonEmptyString(param) && /^[a-z0-9]+$/i.test(param)};

const isBoolean = param => {return isType(param,'boolean')};

const isNotNull = param => {return param != null};

const isNotNullOrUndefined = param => {return param !== null};

const isNumber = param => {return isType(param,'number')};

const isType = (param, type) => {return typeof param === type};

exports.isArray = isArray;
exports.isEmptyArray = isEmptyArray;
exports.isNonNullArray = isNonNullArray;
exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.isNonNullObject = isNonNullObject;
exports.isString = isString;
exports.isEmptyString = isEmptyString;
exports.isNonEmptyString = isNonEmptyString;
exports.isStringNA = isStringNA;
exports.isStringNotNA = isStringNotNA;
exports.isEmailValidString = isEmailValidString;
exports.isPhoneValidString = isPhoneValidString;
exports.isAlphabeticalString = isAlphabeticalString;
exports.isNumericalString = isNumericalString;
exports.isAlphaNumericString = isAlphaNumericString;
exports.isBoolean = isBoolean;
exports.isNotNull = isNotNull;
exports.isNotNullOrUndefined = isNotNullOrUndefined;
exports.isNumber = isNumber;
exports.isType = isType;

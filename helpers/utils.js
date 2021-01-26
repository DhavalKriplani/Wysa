const totp = require('totp-generator');
const jwt = require('jsonwebtoken');
const credentials = require('../Credentials');

exports.generateTOTP = (uniqueId) => {
    uniqueId = uniqueId.replace(/-/g,'');
    return totp(uniqueId, {digits: 8, period: 60});
};

exports.createAccessToken = (data) => {
    return jwt.sign(data, credentials.ACCESS_TOKEN_SECRET, {expiresIn: 300 });
};

exports.verifyAccessToken = (token) => {
    try {
        return jwt.verify(token, credentials.ACCESS_TOKEN_SECRET);
    } catch(err) {
        console.log('err: ', err);
        return null;
    }
};

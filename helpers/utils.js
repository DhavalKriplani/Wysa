const totp = require('totp-generator');
const jwt = require('jsonwebtoken');
const credentials = require('../Credentials');

const generateTOTP = (uniqueId, retries = 5) => {
    uniqueId = uniqueId.replace(/-/g,'');
    console.log(retries);
    try {
        return totp(uniqueId, {digits: 8, period: 60});
    } catch (err) {
        if(retries <= 0)
            return err;
        uniqueId += uniqueId;
        return generateTOTP(uniqueId, --retries)
    }

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

exports.generateTOTP = generateTOTP;
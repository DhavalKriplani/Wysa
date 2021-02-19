const Accounts = require('../Schemas/accounts');
const { v4: uuidV4 } = require('uuid');
const constants = require('../../helpers/Constants');

const addUserDetails = async (nickname) => {
    let user = {};
    user.nickname = nickname;
    user.uniqueId = uuidV4();
    user.subscription = constants.STANDARD_SUBSCRIPTION;
    user.userSettings = {};
    user.userSettings.notifications = true;
    user.userSettings.referralCode = "RBB9M";
    user.dataPorted = false;
    user.dataPortedTo = "";
    let account = new Accounts(user);
    try {
        await account.save();
    } catch (err) {
        return {"message": err}
    }
    return account
};

const getAllUsers = async () => {
    try{
        return await Accounts.find()
    } catch (err) {
        return {"message": err}
    }
};

const getUserDetails = async (uniqueId) => {
    try{
        return await Accounts.findOne({uniqueId: uniqueId})
    } catch (err) {
        return {"message": err}
    }
};

const updateTOTP = async (uniqueId, totp) => {
    try{
        return await Accounts.updateOne({uniqueId: uniqueId}, {$set: {totp: totp}})
    } catch (err) {
        return {"message": err}
    }
};

const getTOTP = async (nickname, totp) => {
    try{
        return await Accounts.findOne({nickname: nickname, totp:totp})
    } catch (err){
        return {"message": err}
    }
};

const portData = async (oldId, newId) => {
    try{
        return await Accounts.updateOne({uniqueId: oldId}, {$set: {dataPorted: true, dataPortedTo: newId}})
    } catch (err){
        return {"message": err}
    }
};

exports.addUserDetails = addUserDetails;
exports.getAllUsers = getAllUsers;
exports.getUserDetails = getUserDetails;
exports.updateTOTP = updateTOTP;
exports.getTOTP = getTOTP;
exports.portData = portData;

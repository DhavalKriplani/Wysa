const utils = require('../../helpers/utils');
const Journal = require('../Schemas/journal');

const addJournalDetails = async (userId) => {
    let journal = {};
    journal.userId = userId;
    let date = Date.now();
    journal.userData = {};
    journal.userData[date] = {
        "event": "Started my Wysa journey",
        "additionalDetails": ""
    };
    let journal1 = new Journal(journal);
    try {
        await journal1.save();
    } catch (err) {
        return {"message": err}
    }
    return journal1
};

const getAllJournals = async () => {
    try{
        return await Journal.find()
    } catch (err) {
        return {"message": err}
    }
};

const getUserJournalDetails = async (userId) => {
    try{
        return await Journal.findOne({userId: userId})
    } catch (err) {
        return {"message": err}
    }
};

const updateJournalDetails = async (userId, userData) => {
    try{
        return await Journal.updateOne({userId: userId}, {$set: {userData: userData}})
    } catch (err) {
        return {"message": err}
    }
};

const portData = async (oldId, newId) => {
    try{
        let oldJournal = await Journal.findOne({userId: oldId});
        let newJournal = await Journal.findOne({userId: newId});
        let userData = {...oldJournal.userData, ...newJournal.userData};
        let orderedUserData = utils.sortObject(userData);
        let keyToBePopped = null;
        for (const [key, value] of Object.entries(orderedUserData)) {
            console.log(key, value);
            if(value.event === "Started my Wysa journey"){
                keyToBePopped = key
            }
        }
        delete orderedUserData[keyToBePopped];
        await Journal.updateOne({userId: oldId}, {$set: {userData: {}}});
        return await Journal.updateOne({userId: newId}, {$set: {userData: orderedUserData}})
    }  catch (err) {
        return {"message": err}
    }
};

exports.addJournalDetails = addJournalDetails;
exports.getAllJournals = getAllJournals;
exports.getUserJournalDetails = getUserJournalDetails;
exports.updateJournalDetails = updateJournalDetails;
exports.portData = portData;

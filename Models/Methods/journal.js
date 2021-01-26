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

exports.addJournalDetails = addJournalDetails;
exports.getAllJournals = getAllJournals;
exports.getUserJournalDetails = getUserJournalDetails;
exports.updateJournalDetails = updateJournalDetails;

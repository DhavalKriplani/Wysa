const Therapists = require('../Schemas/therapists');
const { v4: uuidV4 } = require('uuid');

const addTherapistDetails = async (name) => {
    let therapist = {};
    therapist.nickname = name;
    therapist.uniqueId = uuidV4();
    therapist.rating = 0;
    let therapist1 = new Therapists(therapist);
    try {
        await therapist1.save();
    } catch (err) {
        return {"message": err}
    }
    return therapist1
};

const getAllTherapists = async () => {
    try{
        return await Therapists.find()
    } catch (err) {
        return {"message": err}
    }
};

const getTherapistDetails = async (uniqueId) => {
    try{
        return await Therapists.findOne({uniqueId: uniqueId})
    } catch (err) {
        return {"message": err}
    }
};

exports.addTherapistDetails = addTherapistDetails;
exports.getAllTherapists = getAllTherapists;
exports.getTherapistDetails = getTherapistDetails;

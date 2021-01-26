const Devices = require('../Schemas/devices');

const addDeviceDetails = async (userId, deviceInfo, primaryDevice) => {
    let device = {};
    device.userId = userId;
    device.deviceInfo = deviceInfo;
    device.primaryDevice = primaryDevice;
    let devices = new Devices(device);
    try {
        await devices.save();
    } catch (err) {
        return {"message": err}
    }
    return devices
};

const getAllDevices = async () => {
    try{
        return await Devices.find()
    } catch (err) {
        return {"message": err}
    }
};

const getUserDevices = async (userId) => {
    try{
        return await Devices.findOne({userId: userId})
    } catch (err) {
        return {"message": err}
    }
};

exports.addDeviceDetails = addDeviceDetails;
exports.getAllDevices = getAllDevices;
exports.getUserDevices = getUserDevices;

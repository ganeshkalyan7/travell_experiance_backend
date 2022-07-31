const PinSchema = require("../models/PinSchema");

//create a pin
exports.createPin = async (req, res, next) => {
  try {
    const pinlocation = await PinSchema.create(req.body);
    res.status(201).json(pinlocation);
  } catch (err) {
    console.log(err);
  }
};
exports.getPin = async (req, res, next) => {
  try {
    const getPins = await PinSchema.find();
    res.status(200).json(getPins);
  } catch (err) {
    console.log(err);
  }
};

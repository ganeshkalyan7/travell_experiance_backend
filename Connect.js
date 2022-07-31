const mongoose = require("mongoose");
exports.connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected successfully....");
  } catch (err) {
    console.log(err);
  }
};

const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, mongooseConfig)
    .then(() => console.log("database connected.."))
    .catch((err) => {
      console.log(`connection failed ${err.message}`);
      process.exit(1);
    });
};

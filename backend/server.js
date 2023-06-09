const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();
const uri =
  "mongodb+srv://swiftah20:rahasia200292@react-crud-db.h5ebwng.mongodb.net/?retryWrites=true&w=majority";

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

//connect to db
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(uri, mongooseConfig)
  .then(() => console.log("database connected.."))
  .catch((err) => {
    console.log(`connection failed ${err.message}`);
    process.exit();
  });

// call route user
require("./app/routes/UserRoute")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

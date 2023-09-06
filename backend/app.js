require("dotenv").config();
require("./app/config/database").connect();

const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const app = express();

const verifyToken = require("./app/middleware/auth");
const AuthRoute = require('./app/routes/AuthRoute');

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

//register cors middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieparser());
app.use('/auth', AuthRoute);

// call route user
require("./app/routes/UserRoute")(app);

app.get("/welcome", verifyToken, (req, res) => {
  res.status(200).send("Welcome..");
});

app.use((err, req, res, next) => {
  const status = err.errorStatus || 500;
  const message = err.message;
  const data = err.data;
  res.status(status).json({ message, data });
});

app.get("/", (req, res) => {
  res.send("<h2> Database is running 🥶 </h2>");
});

app.get("*", (req, res) => {
  res.send("<h2> 404 </h2>");
});

module.exports = app;

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = require("../models/LoginModel");
const Register = require("../models/RegisterModel");

router.post("/register", async (req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!(email && password && first_name && last_name)) {
      res.status(400).json({ message: "All input is required." });
    }

    const oldUser = await Register.findOne({ email });

    if (oldUser) {
      return res.status(409).json({ message: "Email already exist." });
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await Register.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;
    console.log(token);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await Login.findOne({ email: email });

  if (!user) return res.status(400).send({ message: "Email not found" });

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  res
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
    })
    .header("Authorization", accessToken);
  //   res
  //     .cookie(refreshToken, {
  //       httpOnly: true,
  //       sameSite: "strict",
  //       secure: true,
  //       maxAge: 604800000,
  //     })
  //     .header("Authorization", accessToken);

  res.json({ accessToken, refreshToken });
});

router.post("/refresh-token", async (req, res, next) => {
  const refreshToken = req.cookies["refreshToken"];
  if (!refreshToken)
    return res
      .status(401)
      .send({ message: "Access Denied. No refresh token provided." });

  //   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
  //     if (err) return res.sendStatus(403);
  //     const accessToken = generateAccessToken({ name: user.name });
  //     const refreshToken = generateRefreshToken(user);
  //     res.json({ accessToken, refreshToken });
  //   });
  console.log(refreshToken);
  try {
    const decoded = generateRefreshToken(user);
    const accessToken = generateAccessToken(user);
    res.header("Authorization", accessToken).send(decoded.user);
  } catch (error) {
    return res.status(400).send("Invalid refresh token.");
  }
});

router.post("/logout", async (req, res, next) => {
  //   refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  //   res.sendStatus(204);
});

function generateAccessToken(user) {
  return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "20s",
  });
}

function generateRefreshToken(user) {
  return jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET);
}

module.exports = router;

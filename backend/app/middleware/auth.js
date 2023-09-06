const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (!req.headers["authorization"]) return res.status(401);
  const authHeader = req.headers["authorization"];
  const bearerToken = authHeader.split(' ');
  const accessToken = bearerToken[1];

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
        const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
        return next(res.sendStatus(message));
    }
    req.user = user;
    next();
  });

  // ###
  //   if (!refreshToken || !accessToken)
  //     return res
  //       .status(401)
  //       .send({ message: "Access denied. No token provided" });

  //   try {
  //     const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  //     req.user = decoded.user;
  //     next();
  //   } catch (error) {
  //     if (!refreshToken) {
  //       return res.status(401).send("Access Denied. No refresh token provided.");
  //     }

  //     try {
  //       const decoded = jwt.verify(
  //         refreshToken,
  //         process.env.REFRESH_TOKEN_SECRET
  //       );
  //       const accessToken = jwt.sign(
  //         { user: decoded.user },
  //         process.env.ACCESS_TOKEN_SECRET,
  //         {
  //           expiresIn: "1h",
  //         }
  //       );

  //       res
  //         .cookie("refreshToken", refreshToken, {
  //           httpOnly: true,
  //           sameSite: "strict",
  //         })
  //         .header("Authorization", accessToken)
  //         .send(decoded.user);
  //     } catch (error) {
  //       return res.status(400).send("Invalid Token.");
  //     }
  //   }

  //   =====

  // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
  //     if (err) return res.status(400).send({ message: "Invalid token"});
  //     req.user = user;
  //     next();
  // })
};

module.exports = verifyToken;

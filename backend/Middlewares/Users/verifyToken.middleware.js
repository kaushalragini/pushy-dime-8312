require("dotenv").config();
var jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, `${process.env.TOKEN}`, (err, decoded) => {
    if (err) {
      res.status(500).json({ msg: "Wrong Session or Token Missing" });
    } else {
      req.body.userId = decoded.userId;
      next();
    }
  });
};

module.exports = {
  verifyToken,
};

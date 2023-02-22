require("dotenv").config();
var jwt = require("jsonwebtoken");

const loginUsers = (req, res) => {
  const { email, password, userId } = req.body;

  const token = jwt.sign(
    {
      userId: userId,
    },
    `${process.env.TOKEN}`,
    { expiresIn: "24h" }
  );
  res.send({ msg: "Login Successful", token: token });
};

module.exports = {
  loginUsers,
};

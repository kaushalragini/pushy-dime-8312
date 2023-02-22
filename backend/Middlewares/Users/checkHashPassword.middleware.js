const { UserModel } = require("../../Models/users.model");
const bcrypt = require("bcrypt");

const checkHashPassword = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          req.body.userId = user._id;
          next();
        } else {
          res.send({ msg: "Password Incorrect ❗" });
        }
      });
    } else {
      res.send({ msg: "This Email Not Exists SignUp First" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  checkHashPassword,
};

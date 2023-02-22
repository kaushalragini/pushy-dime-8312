const { UserModel } = require("../../Models/users.model");

const checkUserAlreadyExist = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const data = await UserModel.findOne({ email: email });
    if (data) {
      res.send({ msg: "User Already Exists" });
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  checkUserAlreadyExist,
};

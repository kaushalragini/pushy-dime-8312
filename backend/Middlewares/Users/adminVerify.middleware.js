const { UserModel } = require("../../Models/users.model");

const adminVerify = async (req, res, next) => {
  const { userId } = req.body;

  try {
    const user = await UserModel.findOne({ _id: userId });
    if (user.is_admin) {
      next();
    } else {
      res.send({ msg: "You are Not authorised 🚫" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  adminVerify,
};

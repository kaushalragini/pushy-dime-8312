const { UserModel } = require("../../Models/users.model");

const getAllUsers = async (req, res) => {
  try {
    const data = await UserModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getAllUsers,
};

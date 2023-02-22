const { UserModel } = require("../../Models/users.model");

const getSingleUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const data = await UserModel.findOne({ _id: userId });
    res.send(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getSingleUser,
};

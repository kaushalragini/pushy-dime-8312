const { UserModel } = require("../../Models/users.model");

const deleteUser = async (req, res, next) => {
  const ID = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: ID });
    res.send({ msg: "User Deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  deleteUser,
};

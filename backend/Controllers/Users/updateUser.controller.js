const { UserModel } = require("../../Models/users.model");

const updateUser = async (req, res) => {
  const body = req.body;
  //* Deleting the userId so that it will not get added in the userSchema
  delete body.userId;
  const ID = req.params.id;
  console.log(body);
  try {
    await UserModel.findByIdAndUpdate({ _id: ID }, body);
    res.send({ msg: "User Updated" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  updateUser,
};

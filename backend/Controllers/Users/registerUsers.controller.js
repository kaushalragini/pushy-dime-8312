const { UserModel } = require("../../Models/users.model");

const registerUsers = async (req, res) => {
  const body = req.body;
  try {
    const data = new UserModel(body);
    await data.save();
    res.send({ msg: `Hello! ${body.name} Your Account is created` });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  registerUsers,
};

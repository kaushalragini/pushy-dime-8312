const { UserModel } = require("../../Models/users.model");

const getAllUsers = async (req, res) => {
  const query = req.query;
  try {
    const data = await UserModel.find(query);
    res.send({
      status: "success",
      count: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getAllUsers,
};

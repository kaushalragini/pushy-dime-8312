const { CartModel } = require("../../Models/cart.model");

const deleteAllUserCartProducts = async (req, res) => {
  const { userId } = req.body;
  try {
    await CartModel.deleteMany({ userId: userId });
    res.send({ msg: "Your Cart is Empty Now!" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  deleteAllUserCartProducts,
};

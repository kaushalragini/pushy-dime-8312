const { CartModel } = require("../../Models/cart.model");

const getAllCartProducts = async (req, res) => {
  try {
    const data = await CartModel.find()
      .populate("productsId")
      .populate("userId");
    res.send(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getAllCartProducts,
};

const { CartModel } = require("../../Models/cart.model");

const deleteCartProducts = async (req, res) => {
  const ID = req.params.id;
  try {
    await CartModel.findByIdAndDelete({ _id: ID });
    res.send({ msg: "Cart Item Deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  deleteCartProducts,
};

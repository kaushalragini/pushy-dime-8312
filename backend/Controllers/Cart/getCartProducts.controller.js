const { CartModel } = require("../../Models/cart.model");

/**
 *
 * @param {*} req
 * @param {*} res - Data according to the required of the products details using Id
 */
const getCartProducts = async (req, res) => {
  const { userId } = req.body;
  try {
    const data = await CartModel.find({ userId: userId }).populate(
      "productsId",
      ["brand", "product_name", "price", "img", "type", "category"]
    );
    res.send(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getCartProducts,
};

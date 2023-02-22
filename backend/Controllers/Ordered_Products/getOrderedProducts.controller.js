const { OrderedProductsModel } = require("../../Models/orderedProducts.model");

const getOrderedProducts = async (req, res) => {
  const { userId } = req.body;
  try {
    const data = await OrderedProductsModel.find({ userId: userId });
    res.send(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getOrderedProducts,
};

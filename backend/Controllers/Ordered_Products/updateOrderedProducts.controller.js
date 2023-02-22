const { OrderedProductsModel } = require("../../Models/orderedProducts.model");

const updateOrderedProducts = async (req, res) => {
  const body = req.body;
  const ID = req.params.id;
  try {
    await OrderedProductsModel.findByIdAndUpdate({ _id: ID }, body);
    res.send({ msg: "Delivery Status Changed" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  updateOrderedProducts,
};

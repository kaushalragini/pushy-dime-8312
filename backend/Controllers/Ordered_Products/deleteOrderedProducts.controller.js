const { OrderedProductsModel } = require("../../Models/orderedProducts.model");

const deleteOrderedProducts = async (req, res) => {
  const ID = req.params.id;
  try {
    await OrderedProductsModel.findByIdAndDelete({ _id: ID });
    res.send({ msg: "Order Cancelled" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  deleteOrderedProducts,
};

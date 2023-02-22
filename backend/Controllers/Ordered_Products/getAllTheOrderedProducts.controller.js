const { OrderedProductsModel } = require("../../Models/orderedProducts.model");

const getAllTheOrderedProducts = async (req, res) => {
  try {
    const data = await OrderedProductsModel.find()
      .populate("userId")
      .populate("productsId");
    res.send(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getAllTheOrderedProducts,
};

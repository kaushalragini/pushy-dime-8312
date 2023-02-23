const { OrderedProductsModel } = require("../../Models/orderedProducts.model");

const getAllTheOrderedProducts = async (req, res) => {
  const query = req.query;
  try {
    const data = await OrderedProductsModel.find(query)
      .populate("userId")
      .populate("productsId");
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
  getAllTheOrderedProducts,
};

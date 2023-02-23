const { OrderedProductsModel } = require("../../Models/orderedProducts.model");

const getOrderedProducts = async (req, res) => {
  const { userId } = req.body;
  try {
    const data = await OrderedProductsModel.find({ userId: userId }).populate(
      "productsId",
      ["product_name", "brand", "price", "mrp", "img"]
    );
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
  getOrderedProducts,
};

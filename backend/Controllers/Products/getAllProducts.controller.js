const { ProductsModel } = require("../../Models/products.model");

const getAllProducts = async (req, res) => {
  try {
    const data = await ProductsModel.find();
    res.send(data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getAllProducts,
};

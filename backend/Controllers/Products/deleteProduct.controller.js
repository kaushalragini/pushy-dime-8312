const { ProductsModel } = require("../../Models/products.model");

const deleteProduct = async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductsModel.findByIdAndDelete({ _id: ID });
    res.send({ msg: "Product Deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  deleteProduct,
};

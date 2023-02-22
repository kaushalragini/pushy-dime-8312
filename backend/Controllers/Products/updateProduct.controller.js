const { ProductsModel } = require("../../Models/products.model");

const updateProduct = async (req, res) => {
  const body = req.body;
  const ID = req.params.id;
  //* Delete UserId so that it will not get added here  in the products
  delete req.body.userId;
  try {
    await ProductsModel.findByIdAndUpdate({ _id: ID }, body);
    res.send({ msg: "Product Updated" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  updateProduct,
};

const { ProductsModel } = require("../../Models/products.model");

const addProducts = async (req, res) => {
  const body = req.body;
  //* Delete UserId so that it will not get added here  in the products
  delete req.body.userId;
  try {
    const prod = new ProductsModel(body);
    await prod.save();
    res.send({ msg: "Products Added" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addProducts,
};

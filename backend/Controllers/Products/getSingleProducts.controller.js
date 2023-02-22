const { ProductsModel } = require("../../Models/products.model");

const getSingleProducts = async (req, res) => {
  const ID = req.params.id;
  try {
    const data = await ProductsModel.findOne({ _id: ID });
    if (data) {
      res.send(data);
    } else {
      res.status(404).json({ msg: "Product Not Found" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getSingleProducts,
};

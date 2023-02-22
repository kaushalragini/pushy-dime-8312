const { ProductsRatingModel } = require("../../Models/productsRating.model");

const updateProdRating = async (req, res) => {
  const ID = req.params.id;
  const body = req.body;
  try {
    await ProductsRatingModel.findByIdAndUpdate({ _id: ID }, body);
    res.send({ msg: "Rating Updated" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  updateProdRating,
};

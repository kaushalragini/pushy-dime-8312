const { ProductsRatingModel } = require("../../Models/productsRating.model");

const deleteProdRating = async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductsRatingModel.findByIdAndDelete({ _id: ID });
    res.send({ msg: "Rating Deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  deleteProdRating,
};

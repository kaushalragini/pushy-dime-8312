const { ProductsRatingModel } = require("../../Models/productsRating.model");

const getProdRating = async (req, res, next) => {
  const query = req.query;
  // productsId
  try {
    const ratings = await ProductsRatingModel.find(query);
    res.send(ratings);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getProdRating,
};

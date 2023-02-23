const { ProductsRatingModel } = require("../../Models/productsRating.model");

const addProdRating = async (req, res) => {
  const body = req.body;
  try {
    const rating = new ProductsRatingModel({
      ...body,
    });
    await rating.save();
    res.send({ msg: "Thank You For rating ❤️" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addProdRating,
};

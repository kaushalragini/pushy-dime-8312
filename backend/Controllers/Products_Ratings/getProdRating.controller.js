const { ProductsRatingModel } = require("../../Models/productsRating.model");

const getProdRating = async (req, res) => {
  const query = req.query; // * This will filter rati8ng according to the products id

  let ratings; // * for storing data based upon embed query
  if (
    query["embed"]?.includes("products") && //? if both are present
    query["embed"].includes("users")
  ) {
    ratings = await ProductsRatingModel.find(query)
      .populate("userId")
      .populate("productsId");
    delete query.embed;
  } else if (query["embed"]?.includes("products")) {
    //? if only products are present in query
    ratings = await ProductsRatingModel.find(query).populate("productsId");
    delete query.embed;
  } else if (query["embed"]?.includes("users")) {
    //? if only users are present in query
    ratings = await ProductsRatingModel.find(query).populate("userId");
    delete query.embed;
  } else {
    //? //? if no embed present in query to `?` -> to avoid the undefined error
    ratings = await ProductsRatingModel.find(query);
  }
  try {
    res.send({
      status: "success",
      count: ratings.length,
      data: ratings,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getProdRating,
};

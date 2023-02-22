const mongoose = require("mongoose");

const productsRatingSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    productsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    rating: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductsRatingModel = mongoose.model(
  "productrating",
  productsRatingSchema
);

module.exports = {
  ProductsRatingModel,
};

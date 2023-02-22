const mongoose = require("mongoose");

const orderedProductsSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    productsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    size: String,
    date: Date,
    status: String,
    quantity: Number,
  },
  {
    versionKey: false,
  }
);

const OrderedProductsModel = mongoose.model(
  "orderedproduct",
  orderedProductsSchema
);

module.exports = {
  OrderedProductsModel,
};

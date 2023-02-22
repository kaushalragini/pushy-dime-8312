const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  productsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  date: Date,
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};

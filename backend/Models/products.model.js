const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    number: { type: String, required: true },
    detail_page_url: String,
    brand: { type: String, required: true },
    product_name: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    img: String,
    all_img: Array,
    home: String,
    type: String,
    designer: String,
    gender: String,
    category: String,
    "sub-category": String,
    description: String,
    rating: Number,
  },
  {
    versionKey: false,
  }
);

const ProductsModel = mongoose.model("product", productsSchema);

module.exports = {
  ProductsModel,
};

const express = require("express");
const {
  addProducts,
} = require("../Controllers/Products/addProducts.controller");
const {
  deleteProduct,
} = require("../Controllers/Products/deleteProduct.controller");
const {
  getAllProducts,
} = require("../Controllers/Products/getAllProducts.controller");
const {
  getSingleProducts,
} = require("../Controllers/Products/getSingleProducts.controller");
const {
  updateProduct,
} = require("../Controllers/Products/updateProduct.controller");
const { adminVerify } = require("../Middlewares/Users/adminVerify.middleware");
const { verifyToken } = require("../Middlewares/Users/verifyToken.middleware");

const productsRouter = express.Router();
/**
 * *Products Routes
 */
productsRouter.get("/all", verifyToken, getAllProducts);

productsRouter.get("/:id", verifyToken, getSingleProducts);

productsRouter.post("/", [verifyToken, adminVerify], addProducts);

productsRouter.patch("/:id", [verifyToken, adminVerify], updateProduct);

productsRouter.delete("/:id", [verifyToken, adminVerify], deleteProduct);

module.exports = {
  productsRouter,
};

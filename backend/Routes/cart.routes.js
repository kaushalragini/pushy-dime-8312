const express = require("express");
const {
  addCartProducts,
} = require("../Controllers/Cart/addCartProducts.controller");
const {
  deleteAllUserCartProducts,
} = require("../Controllers/Cart/deleteAllUserCartProducts.controller");
const {
  deleteCartProducts,
} = require("../Controllers/Cart/deleteCartProducts.controller");
const {
  getAllCartProducts,
} = require("../Controllers/Cart/getAllCartProducts.controller");
const {
  getCartProducts,
} = require("../Controllers/Cart/getCartProducts.controller");
const {
  updateCartProducts,
} = require("../Controllers/Cart/updateCartProducts.controller");
const { adminVerify } = require("../Middlewares/Users/adminVerify.middleware");
const { verifyToken } = require("../Middlewares/Users/verifyToken.middleware");

/**
 * *Cart Routes
 * ! Middleware Add
 */

const cartRouter = express.Router();

cartRouter.get("/", verifyToken, getCartProducts);

cartRouter.get("/all", [verifyToken, adminVerify], getAllCartProducts);

cartRouter.post("/", verifyToken, addCartProducts);

cartRouter.patch("/:id", verifyToken, updateCartProducts);

cartRouter.delete("/:id", verifyToken, deleteCartProducts);

cartRouter.delete("/user/empty", verifyToken, deleteAllUserCartProducts);

module.exports = {
  cartRouter,
};

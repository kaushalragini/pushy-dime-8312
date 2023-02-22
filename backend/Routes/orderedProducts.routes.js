const express = require("express");
const {
  addOrderedProducts,
} = require("../Controllers/Ordered_Products/addOrderedProducts.controller");
const {
  deleteOrderedProducts,
} = require("../Controllers/Ordered_Products/deleteOrderedProducts.controller");
const {
  getAllTheOrderedProducts,
} = require("../Controllers/Ordered_Products/getAllTheOrderedProducts.controller");
const {
  getOrderedProducts,
} = require("../Controllers/Ordered_Products/getOrderedProducts.controller");
const {
  updateOrderedProducts,
} = require("../Controllers/Ordered_Products/updateOrderedProducts.controller");
const { adminVerify } = require("../Middlewares/Users/adminVerify.middleware");
const { verifyToken } = require("../Middlewares/Users/verifyToken.middleware");

/**
 * *OrderedProducts Routes
 */

const orderedProductsRouter = express.Router();

orderedProductsRouter.get("/", verifyToken, getOrderedProducts);

orderedProductsRouter.get("/all", [verifyToken, adminVerify], getAllTheOrderedProducts);

orderedProductsRouter.post("/", verifyToken, addOrderedProducts);

orderedProductsRouter.patch("/:id", [verifyToken, adminVerify], updateOrderedProducts);

orderedProductsRouter.delete("/:id", verifyToken, deleteOrderedProducts);

module.exports = {
  orderedProductsRouter,
};

const express = require("express");
const {
  addProdRating,
} = require("../Controllers/Products_Ratings/addProdRating.controller");
const {
  deleteProdRating,
} = require("../Controllers/Products_Ratings/deleteProdRating.controller");
const {
  getProdRating,
} = require("../Controllers/Products_Ratings/getProdRating.controller");
const {
  updateProdRating,
} = require("../Controllers/Products_Ratings/updateProdRating.controller");
const { adminVerify } = require("../Middlewares/Users/adminVerify.middleware");
const { verifyToken } = require("../Middlewares/Users/verifyToken.middleware");

const productsRatingRouter = express.Router();

/**
 * * Products Rating Routes
 */

productsRatingRouter.get("/", verifyToken, getProdRating);

productsRatingRouter.post("/", verifyToken, addProdRating);

// * Admin Side
// productsRatingRouter.get("/all", [verifyToken, adminVerify], getAllProductsRating);

productsRatingRouter.patch(
  "/:id",
  [verifyToken, adminVerify],
  updateProdRating
);

productsRatingRouter.delete(
  "/:id",
  [verifyToken, adminVerify],
  deleteProdRating
);

module.exports = {
  productsRatingRouter,
};

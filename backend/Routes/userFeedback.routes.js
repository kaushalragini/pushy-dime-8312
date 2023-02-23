const express = require("express");
const {
  addUserFeedback,
} = require("../Controllers/User_FeedBack/addUserFeedback.controller");
const {
  getAllUserFeedback,
} = require("../Controllers/User_FeedBack/getAllUserFeedback.controller");
const { adminVerify } = require("../Middlewares/Users/adminVerify.middleware");
const { verifyToken } = require("../Middlewares/Users/verifyToken.middleware");

const userFeedbackRouter = express.Router();

/**
 * * User Feedback Routes
 */

userFeedbackRouter.get("/all", [verifyToken, adminVerify], getAllUserFeedback);

userFeedbackRouter.post("/", verifyToken, addUserFeedback);

module.exports = {
  userFeedbackRouter,
};

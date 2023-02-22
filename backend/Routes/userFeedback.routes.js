const express = require("express");
const {
  addUserFeedback,
} = require("../Controllers/User_FeedBack/addUserFeedback.controller");
const {
  getAllUserFeedback,
} = require("../Controllers/User_FeedBack/getAllUserFeedback.controller");

const userFeedbackRouter = express.Router();

/**
 * * User Feedback Routes
 * ! Middleware Add
 */

userFeedbackRouter.get("/all", getAllUserFeedback);

userFeedbackRouter.post("/", addUserFeedback);

module.exports = {
  userFeedbackRouter,
};
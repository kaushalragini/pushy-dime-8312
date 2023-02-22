const mongoose = require("mongoose");

const userFeedbackSchema = mongoose.Schema({
  feedBack: String,
  userId: String,
});

const UserFeedbackModel = mongoose.model("userfeedback", userFeedbackSchema);

module.exports = {
  UserFeedbackModel,
};

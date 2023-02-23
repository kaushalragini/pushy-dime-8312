const { UserFeedbackModel } = require("../../Models/userFeedback.model");

const getAllUserFeedback = async (req, res) => {
  const query = req.query;
  try {
    const feedback = await UserFeedbackModel.find(query).populate("userId", [
      "name",
      "email",
    ]);
    res.send({
      status: "success",
      count: feedback.length,
      data: feedback,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getAllUserFeedback,
};

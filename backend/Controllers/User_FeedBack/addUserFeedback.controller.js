const { UserFeedbackModel } = require("../../Models/userFeedback.model");

const addUserFeedback = async (req, res) => {
  const body = req.body;
  try {
    const feedback = new UserFeedbackModel(body);
    await feedback.save();
    res.send({ msg: "Thanks for your Feedback ❤️" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addUserFeedback,
};

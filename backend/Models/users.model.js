const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    avatar_url: { type: String, required: false },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    pincode: { type: String, required: false },
    is_admin: { type: Boolean, required: false },
    dob: { type: String, required: false },
    gender: { type: String, required: false },
    age: { type: Number, required: false },
    Company_Name: { type: String, required: false },
    gst_No: { type: String, required: false },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};

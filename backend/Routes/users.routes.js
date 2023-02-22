const express = require("express");
const { deleteUser } = require("../Controllers/Users/deleteUser.controller");
const { getAllUsers } = require("../Controllers/Users/getAllUsers.controller");
const {
  getSingleUser,
} = require("../Controllers/Users/getSingleUser.controller");
const { loginUsers } = require("../Controllers/Users/loginUsers.controller");
const {
  registerUsers,
} = require("../Controllers/Users/registerUsers.controller");
const { updateUser } = require("../Controllers/Users/updateUser.controller");
const { adminVerify } = require("../Middlewares/Users/adminVerify.middleware");
const {
  checkHashPassword,
} = require("../Middlewares/Users/checkHashPassword.middleware");
const {
  checkUserAlreadyExist,
} = require("../Middlewares/Users/checkUserAlreadyExist.middleware");
const {
  hashPassword,
} = require("../Middlewares/Users/hashPassword.middleware");
const { verifyToken } = require("../Middlewares/Users/verifyToken.middleware");

const userRouter = express.Router();

/**
 * *Authentication
 */

// * Register
userRouter.post(
  "/register",
  [checkUserAlreadyExist, hashPassword],
  registerUsers
);

// * Login
userRouter.post("/login", checkHashPassword, loginUsers);

/**
 * * Other User Routes
 */

userRouter.get("/", [verifyToken], getSingleUser);

userRouter.get("/all", [verifyToken, adminVerify], getAllUsers);

userRouter.patch("/:id", [verifyToken, hashPassword], updateUser);

userRouter.delete("/:id", [verifyToken, adminVerify], deleteUser);

module.exports = {
  userRouter,
};

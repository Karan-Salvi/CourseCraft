const express = require("express");
const {
  getUserProfile,
  login,
  logout,
  register,
  updateProfile,
} = require("../controllers/user.controller.js");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const upload = require("../utils/multer.js");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile").get(isAuthenticated(), getUserProfile);
router
  .route("/profile/update")
  .put(isAuthenticated(), upload.single("profilePhoto"), updateProfile);
module.exports = router;

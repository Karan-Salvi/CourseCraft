const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const {
  createCheckoutSession,
  getAllPurchasedCourse,
  getCourseDetailWithPurchaseStatus,
  stripeWebhook,
} = require("../controllers/coursePurchase.controller.js");
const router = express.Router();

router
  .route("/checkout/create-checkout-session")
  .post(isAuthenticated(), createCheckoutSession);
router
  .route("/webhook")
  .post(express.raw({ type: "application/json" }), stripeWebhook);
router
  .route("/course/:courseId/detail-with-status")
  .get(isAuthenticated(), getCourseDetailWithPurchaseStatus);

router.route("/").get(isAuthenticated(), getAllPurchasedCourse);

module.exports = router;

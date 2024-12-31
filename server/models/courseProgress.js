const mongoose = require("mongoose");

const lectureProgressSchema = new mongoose.Schema({
  lectureId: { type: String },
  viewed: { type: Boolean },
});

const courseProgressSchema = new mongoose.Schema({
  userId: { type: String },
  courseId: { type: String },
  completed: { type: Boolean },
  lectureProgress: [lectureProgressSchema],
});
const CourseProgress = mongoose.model("CourseProgress", courseProgressSchema);

module.exports = CourseProgress;

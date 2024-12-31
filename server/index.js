const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./database/db.js");
const userRoute = require("./routes/user.route.js");
const courseRoute = require("./routes/course.route.js");
const mediaRoute = require("./routes/media.route.js");
const purchaseRoute = require("./routes/purchaseCourse.route.js");
const courseProgressRoute = require("./routes/courseProgress.route.js");

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

console.log(process.env.FRONTEND_URL);

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

// app.use((req, res, next) => {
//   res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
//   res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL); // Allow requests from all origins
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers

//   if (req.method === "OPTIONS") {
//     return res.status(200).end(); // Respond immediately to preflight requests
//   }

//   next();
// });

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Server is ready to listen");
});

// apis
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});

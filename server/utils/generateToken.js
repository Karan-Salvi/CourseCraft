const jwt = require("jsonwebtoken");

const generateToken = (res, user, message) => {
  try {
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        path: "/",
        sameSite: "None",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      })
      .json({
        success: true,
        message,
        user,
      });
  } catch (error) {
    console.log(error);
  }
};

// , {
//   path: "/",
//   sameSite: "None",
//   secure: process.env.NODE_ENV === "production",
//   httpOnly: true,
//   expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
// }
module.exports = { generateToken };

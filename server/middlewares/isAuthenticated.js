const jwt = require("jsonwebtoken");

// const isAuthenticated = async (req, res, next) => {
//   try {
//     return next();
//     const token = req.cookies.token;
//     if (!token) {
//       return res.status(401).json({
//         message: "User not authenticated",
//         success: false,
//       });
//     }
//     const decode = await jwt.verify(token, process.env.SECRET_KEY);
//     if (!decode) {
//       return res.status(401).json({
//         message: "Invalid token",
//         success: false,
//       });
//     }
//     req.id = decode.userId;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

function isAuthenticated() {
  return async (req, res, next) => {
    try {
      //const token = req.cookies.token;

      const token = req.cookies["token"];

      console.log("Token is : ", token);

      if (!token) {
        return res.status(401).json({
          message: "User not authenticated",
          success: false,
        });
      }
      const decode = await jwt.verify(token, process.env.SECRET_KEY);

      console.log("Decode is : ", decode);

      if (!decode) {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
        });
      }
      req.id = decode.userId;
      next();
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = isAuthenticated;

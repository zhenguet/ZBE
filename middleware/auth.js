const Token = require("../models/Token");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "No token provided or incorrect format" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const tokenDoc = await Token.findOne({ token });
    if (!tokenDoc || tokenDoc.isRevoked) {
      return res.status(401).json({ message: "Token has been revoked" });
    }

    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = auth;

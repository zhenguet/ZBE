const Token = require("../../models/Token");

exports.logout = async (req, res) => {
  const { username } = req.user;

  try {
    await Token.updateMany({ username }, { isRevoked: true });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

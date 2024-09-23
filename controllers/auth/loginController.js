const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const Token = require("../../models/Token");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    const tokenDoc = new Token({ token, userId: user._id, username });
    await tokenDoc.save();

    const userInfo = {
      username: user.username,
      email: user.email,
      fullName: user.fullName,
    };

    res.status(200).json({ token, userInfo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

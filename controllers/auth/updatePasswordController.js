const User = require("../../models/User");
const bcrypt = require("bcrypt");

exports.updatePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { username } = req.user;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect old password" });
    }

    user.password = newPassword;
    await user.save(); // Mongoose middleware sẽ tự động hash mật khẩu mới

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
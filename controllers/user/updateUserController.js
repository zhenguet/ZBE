const User = require("../../models/User");

const updateUser = async (req, res) => {
  const { email, fullName } = req.body;
  const { username } = req.user;

  if (!email || !fullName) {
    return res.status(400).json({ message: "Email and fullName are required" });
  }

  try {
    const existingEmail = await User.findOne({ email });
    if (existingEmail && existingEmail.username !== username) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = await User.findOneAndUpdate(
      { username: username },
      { email: email, fullName: fullName },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      message: "User information updated successfully",
      userInfo: {
        username: user.username,
        email: user.email,
        fullName: user.fullName,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { updateUser };

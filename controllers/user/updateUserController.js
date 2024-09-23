const User = require("../../models/User");

exports.updateUser = async (req, res) => {
  const { email, fullName } = req.body;
  const { username } = req.user;

  try {
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
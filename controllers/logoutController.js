exports.logout = async (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};

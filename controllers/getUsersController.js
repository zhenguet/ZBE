const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const { username, email, fullName } = req.body;

    let searchCriteria = {};

    if (username) {
      searchCriteria.username = { $regex: username, $options: "i" };
    }
    if (email) {
      searchCriteria.email = { $regex: email, $options: "i" };
    }
    if (fullName) {
      searchCriteria.fullName = { $regex: fullName, $options: "i" };
    }

    const users = await User.find(searchCriteria);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Lỗi khi lấy danh sách người dùng",
      error,
    });
  }
};

module.exports = { getUsers };

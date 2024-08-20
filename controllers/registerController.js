const User = require("../models/User");

exports.register = async (req, res) => {
  const { username, password, email, fullName } = req.body;
  try {
    const newUser = new User({ username, password, email, fullName });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const User = require("../../models/User");

exports.register = async (req, res) => {
  const { username, password, email, fullName } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!fullName) {
    return res.status(400).json({ message: "Full name is required" });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ message: "Username already exists" });
      }
      if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already exists" });
      }
    }

    const newUser = new User({ username, password, email, fullName });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

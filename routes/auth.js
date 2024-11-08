const express = require("express");
const auth = require("../middleware/auth");
const { register } = require("../controllers/auth/registerController");
const { login } = require("../controllers/auth/loginController");
const { logout } = require("../controllers/auth/logoutController");
const {
  updatePassword,
} = require("../controllers/auth/updatePasswordController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", auth, logout);
router.post("/updatePassword", auth, updatePassword);

module.exports = router;

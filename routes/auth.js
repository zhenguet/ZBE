const express = require("express");
const auth = require("../middleware/auth");
const { register } = require("../controllers/auth/registerController");
const { login } = require("../controllers/auth/loginController");
const { logout } = require("../controllers/auth/logoutController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", auth, logout);

module.exports = router;

const express = require("express");
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const updateUserInfoController = require("../controllers/updateUserInfoController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.post("/logout", logoutController.logout);
router.post("/update", auth, updateUserInfoController.updateUserInfo);

module.exports = router;

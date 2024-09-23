const express = require("express");
const { register } = require("../controllers/registerController");
const { login } = require("../controllers/loginController");
const { logout } = require("../controllers/logoutController");
const { updateUserInfo } = require("../controllers/updateUserInfoController");
const { getUsers } = require("../controllers/getUsersController");
const auth = require("../middleware/auth");
const router = express.Router();

//#region DELETE methods

//#endregion

//#region GET methods
router.get("/users", auth, getUsers);
//#endregion

//#region POST methods
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/update", auth, updateUserInfo);
//#endregion

//#region PUT methods

//#endregion

module.exports = router;

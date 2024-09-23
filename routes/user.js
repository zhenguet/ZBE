const express = require("express");
const auth = require("../middleware/auth");
const { updateUser } = require("../controllers/user/updateUserController");
const { getUsers } = require("../controllers/user/getUsersController");
const { deleteUser } = require("../controllers/user/deleteUserController");
const router = express.Router();

router.post("/updateUser", auth, updateUser);
router.get("/getUsers", auth, getUsers);
router.delete("/deleteUser", auth, deleteUser);

module.exports = router;

const express = require("express");
const { updateUser } = require("../controllers/user/updateUserController");
const { getUsers } = require("../controllers/user/getUsersController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/update", auth, updateUser);
router.get("/users", auth, getUsers);

module.exports = router;

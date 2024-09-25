const express = require("express");
const auth = require("../middleware/auth");
const { checkIn } = require("../controllers/attendance/checkInController");

const router = express.Router();

router.post("/checkIn", auth, checkIn);

module.exports = router;

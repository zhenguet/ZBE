const express = require("express");
const auth = require("../middleware/auth");
const {
  addLocation,
} = require("../controllers/location/addLocationController");

const router = express.Router();

router.post("/addLocation", auth, addLocation);

module.exports = router;

const express = require("express");
const auth = require("../middleware/auth");
const {
  addLocation,
} = require("../controllers/location/addLocationController");
const {
  getLocations,
} = require("../controllers/location/getLocationController");
const {
  deleteLocation,
} = require("../controllers/location/deleteLocationController");
const {
  updateLocation,
} = require("../controllers/location/updateLocationController");

const router = express.Router();

router.post("/addLocation", auth, addLocation);
router.get("/getLocations", auth, getLocations);
router.delete("/deleteLocation/:id", deleteLocation);
router.put("/updateLocation/:id", auth, updateLocation);

module.exports = router;

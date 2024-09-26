const addLocation = require("./addLocation");
const getLocations = require("./getLocations");
const deleteLocation = require("./deleteLocation");
const updateLocation = require("./updateLocation");

module.exports = {
  ...addLocation,
  ...getLocations,
  ...deleteLocation,
  ...updateLocation,
};

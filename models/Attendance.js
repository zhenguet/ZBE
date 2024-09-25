const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  username: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, required: true },
});

module.exports = mongoose.model("Attendance", attendanceSchema);

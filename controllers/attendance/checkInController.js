const Attendance = require("../../models/Attendance");
const Location = require("../../models/Location");
const { haversineDistance } = require("../../utils/calculateDistance");

const checkIn = async (req, res) => {
  const { latitude, longitude, timestamp } = req.body;
  const { username } = req.user;

  if (!latitude || !longitude || !timestamp) {
    return res.status(400).json({ error: "Thiếu thông tin chấm công" });
  }

  try {
    const locations = await Location.find();

    if (!locations || locations.length === 0) {
      return res.status(404).json({ error: "Không có địa điểm nào được thêm" });
    }

    let isWithinRange = false;
    for (const location of locations) {
      const distance = haversineDistance(
        latitude,
        longitude,
        location.latitude,
        location.longitude
      );
      if (distance <= location.radius) {
        isWithinRange = true;
        break;
      }
    }

    if (!isWithinRange) {
      return res
        .status(400)
        .json({ error: "Vị trí chấm công ngoài khu vực cho phép" });
    }

    const newAttendance = new Attendance({
      username,
      latitude,
      longitude,
      timestamp,
    });

    await newAttendance.save();
    return res.status(201).json({ message: "Chấm công thành công" });
  } catch (error) {
    console.error("Error during check-in:", error);
    return res
      .status(500)
      .json({ error: "Lỗi hệ thống", details: error.message });
  }
};

module.exports = { checkIn };

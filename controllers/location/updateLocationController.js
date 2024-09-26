const Location = require("../../models/Location");

const updateLocation = async (req, res) => {
  const { latitude, longitude, radius } = req.body;

  if (!latitude || !longitude || !radius) {
    return res.status(400).json({ error: "Thiếu thông tin địa điểm" });
  }

  try {
    const existingLocation = await Location.findOne();
    if (!existingLocation) {
      return res
        .status(404)
        .json({ error: "Không có địa điểm nào để cập nhật" });
    }

    existingLocation.latitude = latitude;
    existingLocation.longitude = longitude;
    existingLocation.radius = radius;

    await existingLocation.save();

    return res
      .status(200)
      .json({ message: "Cập nhật địa điểm chấm công thành công" });
  } catch (error) {
    console.error("Lỗi khi cập nhật địa điểm:", error);
    return res
      .status(500)
      .json({ error: "Lỗi hệ thống", details: error.message });
  }
};

module.exports = { updateLocation };

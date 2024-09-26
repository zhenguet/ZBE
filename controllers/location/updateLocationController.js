const Location = require("../../models/Location");

const updateLocation = async (req, res) => {
  const { id } = req.params;
  const { name, latitude, longitude, radius } = req.body;

  if (!id || !name || !latitude || !longitude || !radius) {
    return res.status(400).json({ error: "Thiếu thông tin địa điểm" });
  }

  try {
    const updatedLocation = await Location.findByIdAndUpdate(
      id,
      { name, latitude, longitude, radius },
      { new: true }
    );

    if (!updatedLocation) {
      return res
        .status(404)
        .json({ error: "Không tìm thấy địa điểm để cập nhật" });
    }

    return res.status(200).json({
      message: "Cập nhật địa điểm chấm công thành công",
      updatedLocation,
    });
  } catch (error) {
    console.error("Lỗi khi cập nhật địa điểm:", error);
    return res
      .status(500)
      .json({ error: "Lỗi hệ thống", details: error.message });
  }
};

module.exports = { updateLocation };

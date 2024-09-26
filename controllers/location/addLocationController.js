const Location = require("../../models/Location");

const addLocation = async (req, res) => {
  const { name, latitude, longitude, radius } = req.body;

  if (!name || !latitude || !longitude || !radius) {
    return res.status(400).json({ error: "Thiếu thông tin địa điểm" });
  }

  try {
    const newLocation = new Location({
      name,
      latitude,
      longitude,
      radius,
    });

    await newLocation.save();
    return res
      .status(201)
      .json({ message: "Thêm địa điểm chấm công thành công" });
  } catch (error) {
    console.error("Lỗi khi thêm địa điểm:", error);
    return res
      .status(500)
      .json({ error: "Lỗi hệ thống", details: error.message });
  }
};

module.exports = { addLocation };

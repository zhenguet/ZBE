const Location = require("../../models/Location");

const deleteLocation = async (req, res) => {
  try {
    const existingLocation = await Location.findOne();
    if (!existingLocation) {
      return res.status(404).json({ error: "Không có địa điểm nào để xóa" });
    }

    await Location.deleteOne({ _id: existingLocation._id });

    return res
      .status(200)
      .json({ message: "Xóa địa điểm chấm công thành công" });
  } catch (error) {
    console.error("Lỗi khi xóa địa điểm:", error);
    return res
      .status(500)
      .json({ error: "Lỗi hệ thống", details: error.message });
  }
};

module.exports = { deleteLocation };

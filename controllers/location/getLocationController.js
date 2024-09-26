const Location = require("../../models/Location");

const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    if (locations.length === 0) {
      return res.status(404).json({ message: "Không có địa điểm nào" });
    }

    return res.status(200).json({ locations });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách địa điểm:", error);
    return res
      .status(500)
      .json({ error: "Lỗi hệ thống", details: error.message });
  }
};

module.exports = { getLocations };

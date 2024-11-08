const Attendance = require('../../models/Attendance');
const { haversineDistance } = require('../../utils/calculateDistance');

const checkOut = async (req, res) => {
	const { latitude, longitude, timestamp } = req.body;
	const { username } = req.user;

	if (!latitude || !longitude || !timestamp) {
		return res.status(400).json({ error: 'Thiếu thông tin check-out' });
	}

	try {
		// Tìm bản ghi chấm công gần nhất chưa có checkOut của user
		const latestAttendance = await Attendance.findOne({
			username,
			checkOut: null,
		}).sort({ timestamp: -1 });

		if (!latestAttendance) {
			return res
				.status(404)
				.json({ error: 'Không tìm thấy bản ghi chấm công nào để check-out' });
		}

		// Cập nhật thông tin check-out cho bản ghi chấm công này
		latestAttendance.checkOut = {
			latitude,
			longitude,
			timestamp,
		};

		// Kiểm tra xem user có ở trong phạm vi hợp lệ không
		let isWithinRange = false;
		for (const location of locations) {
			const distance = haversineDistance(
				latitude,
				longitude,
				location.latitude,
				location.longitude,
			);
			if (distance <= location.radius) {
				isWithinRange = true;
				break;
			}
		}

		await latestAttendance.save();
		return res.status(200).json({ message: 'Check-out thành công' });
	} catch (error) {
		console.error('Error during check-out:', error);
		return res
			.status(500)
			.json({ error: 'Lỗi hệ thống', details: error.message });
	}
};

module.exports = { checkOut };

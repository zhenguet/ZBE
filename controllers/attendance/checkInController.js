const Attendance = require('../../models/Attendance');
const Location = require('../../models/Location');
const User = require('../../models/User'); // Để liên kết user vào Attendance
const { haversineDistance } = require('../../utils/calculateDistance');

const checkIn = async (req, res) => {
	const { latitude, longitude, timestamp } = req.body;
	const { username } = req.user;

	if (!latitude || !longitude || !timestamp) {
		return res.status(400).json({ error: 'Thiếu thông tin chấm công' });
	}

	try {
		// Tìm user dựa vào username
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(404).json({ error: 'Không tìm thấy người dùng' });
		}

		const locations = await Location.find();

		if (!locations || locations.length === 0) {
			return res.status(404).json({ error: 'Không có địa điểm nào được thêm' });
		}

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

		if (!isWithinRange) {
			return res
				.status(400)
				.json({ error: 'Vị trí chấm công ngoài khu vực cho phép' });
		}

		// Tạo mới Attendance với check-in
		const newAttendance = new Attendance({
			user: user._id,
			username: user.username, // Thêm dòng này để cung cấp `username`
			checkIn: {
				latitude,
				longitude,
				timestamp,
			},
		});

		await newAttendance.save();
		return res.status(201).json({ message: 'Chấm công thành công' });
	} catch (error) {
		console.error('Error during check-in:', error);
		return res
			.status(500)
			.json({ error: 'Lỗi hệ thống', details: error.message });
	}
};

module.exports = { checkIn };

const Attendance = require('../../models/Attendance');

const getAttendance = async (req, res) => {
	const { username } = req.params;

	try {
		const attendanceRecords = await Attendance.find({ username });

		if (!attendanceRecords || attendanceRecords.length === 0) {
			return res.status(404).json({ error: 'Không có bản ghi chấm công nào' });
		}

		return res.status(200).json({ data: attendanceRecords });
	} catch (error) {
		console.error('Error fetching attendance records:', error);
		return res
			.status(500)
			.json({ error: 'Lỗi hệ thống', details: error.message });
	}
};

module.exports = { getAttendance };

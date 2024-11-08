const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	checkIn: {
		latitude: { type: Number, required: true },
		longitude: { type: Number, required: true },
		timestamp: { type: Date, required: true },
	},
	checkOut: {
		latitude: { type: Number },
		longitude: { type: Number },
		timestamp: { type: Date },
	},
});

module.exports = mongoose.model('Attendance', attendanceSchema);

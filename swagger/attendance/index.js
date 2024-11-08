const checkIn = require('./checkIn');
const checkOut = require('./checkOut');
const getAttendance = require('./getAttendance');

module.exports = {
	...checkIn,
	...checkOut,
	...getAttendance,
};

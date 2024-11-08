const express = require('express');
const auth = require('../middleware/auth');
const { checkIn } = require('../controllers/attendance/checkInController');
const { checkOut } = require('../controllers/attendance/checkOutController');
const { getAttendance } = require('../controllers/attendance/getAttendance');

const router = express.Router();

router.post('/checkIn', auth, checkIn);
router.post('/checkOut', auth, checkOut);
router.post('/:username', auth, getAttendance);

module.exports = router;

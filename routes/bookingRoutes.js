const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/book', authMiddleware, bookingController.bookSeat);
router.get('/bookings/:booking_id', authMiddleware, bookingController.getBookingDetails);

module.exports = router;

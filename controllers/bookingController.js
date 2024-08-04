const Train = require('../models/Train');
const Booking = require('../models/Booking');

exports.bookSeat = async (req, res) => {
  const { train_id } = req.body;
  const user_id = req.user.userId;

  const train = await Train.getTrainById(train_id);
  if (!train || train.available_seats <= 0) {
    return res.status(400).json({ message: 'No available seats' });
  }

  await Train.updateAvailableSeats(train_id, train.available_seats - 1);
  await Booking.createBooking(user_id, train_id);
  res.status(201).json({ message: 'Seat booked successfully' });
};

exports.getBookingDetails = async (req, res) => {
  const { booking_id } = req.params;
  const booking = await Booking.getBookingById(booking_id);
  res.status(200).json(booking);
};

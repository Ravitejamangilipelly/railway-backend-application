const db = require('../utils/db');

class Booking {
  static async createBooking(user_id, train_id) {
    const [result] = await db.execute('INSERT INTO bookings (user_id, train_id) VALUES (?, ?)', [user_id, train_id]);
    return result;
  }

  static async getBookingsByUserId(user_id) {
    const [rows] = await db.execute('SELECT * FROM bookings WHERE user_id = ?', [user_id]);
    return rows;
  }

  static async getBookingById(booking_id) {
    const [rows] = await db.execute('SELECT * FROM bookings WHERE id = ?', [booking_id]);
    return rows[0];
  }
}

module.exports = Booking;

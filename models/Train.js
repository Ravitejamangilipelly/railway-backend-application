const db = require('../utils/db');

class Train {
  static async createTrain(train_name, source, destination, total_seats) {
    const [result] = await db.execute('INSERT INTO trains (train_name, source, destination, total_seats, available_seats) VALUES (?, ?, ?, ?, ?)', [train_name, source, destination, total_seats, total_seats]);
    return result;
  }

  static async getTrainsByRoute(source, destination) {
    const [rows] = await db.execute('SELECT * FROM trains WHERE source = ? AND destination = ?', [source, destination]);
    return rows;
  }

  static async getTrainById(train_id) {
    const [rows] = await db.execute('SELECT * FROM trains WHERE id = ?', [train_id]);
    return rows[0];
  }

  static async updateAvailableSeats(train_id, seats) {
    const [result] = await db.execute('UPDATE trains SET available_seats = ? WHERE id = ?', [seats, train_id]);
    return result;
  }
}

module.exports = Train;

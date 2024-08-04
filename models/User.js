const db = require('../utils/db');

class User {
  static async createUser(username, password, isAdmin = false) {
    const [result] = await db.execute('INSERT INTO users (username, password, isAdmin) VALUES (?, ?, ?)', [username, password, isAdmin]);
    return result;
  }

  static async getUserByUsername(username) {
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
  }
}

module.exports = User;

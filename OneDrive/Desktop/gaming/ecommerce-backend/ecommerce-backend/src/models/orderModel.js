const db = require('../config/db');

class Order {
  static async createOrder(userId, totalAmount) {
    const [result] = await db.query('INSERT INTO orders (user_id, total_amount) VALUES (?, ?)', [userId, totalAmount]);
    return result.insertId;
  }

  static async getOrderById(id) {
    const [rows] = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
    return rows[0];
  }
}

module.exports = Order;

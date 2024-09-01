const db = require('../config/db');

class Product {
  static async getAllProducts() {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;
  }

  static async getProductById(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  }

  static async createProduct(name, description, price, imageUrl) {
    const [result] = await db.query('INSERT INTO products (name, description, price, image_url) VALUES (?, ?, ?, ?)', [name, description, price, imageUrl]);
    return result.insertId;
  }
}

module.exports = Product;

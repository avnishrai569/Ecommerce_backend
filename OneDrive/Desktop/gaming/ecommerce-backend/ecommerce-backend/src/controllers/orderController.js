const Order = require('../models/orderModel');
const { sendOrderConfirmationEmail } = require('../utils/emailUtils');

exports.createOrder = async (req, res) => {
  try {
    const { userId, totalAmount } = req.body;
    const orderId = await Order.createOrder(userId, totalAmount);
    await sendOrderConfirmationEmail(userId, orderId);
    res.status(201).json({ orderId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order !' });
  }
};

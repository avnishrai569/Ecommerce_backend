const jwt = require('jsonwebtoken');
const { hashPassword } = require('../models/userModel');
const { sendOrderConfirmationEmail } = require('../services/emailService');

const login = async (req, res) => {
    // Handle user login and return JWT token
};

const addToCart = (req, res) => {
    // Add product to shopping cart
};

module.exports = { login, addToCart };

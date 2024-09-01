const express = require('express');
const { login, addToCart } = require('../controllers/userController');
const { registerValidation, validate } = require('../utils/validation');
const router = express.Router();

router.post('/login', login);
router.post('/cart', addToCart);

module.exports = router;

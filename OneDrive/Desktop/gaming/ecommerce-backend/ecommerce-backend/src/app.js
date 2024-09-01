// src/app.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

app.use(express.json());
app.use(loggerMiddleware);  // Ensure loggerMiddleware is correctly imported and used

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

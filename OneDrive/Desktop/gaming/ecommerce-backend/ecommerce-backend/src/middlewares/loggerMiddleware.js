// const jwt = require('jsonwebtoken');

// exports.authenticate = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
  
//   if (!token) return res.status(401).json({ error: 'Unauthorized' });

//   jwt.verify(token, 'secret_key', (err, decoded) => {
//     if (err) return res.status(401).json({ error: 'Unauthorized' });

//     req.userId = decoded.userId;
//     next();
//   });
// };
// src/middlewares/loggerMiddleware.js
// src/middlewares/loggerMiddleware.js
const pino = require('pino');
const pretty = require('pino-pretty');
const stream = pretty();

const logger = pino(stream);

module.exports = (req, res, next) => {
  logger.info({ req });
  res.on('finish', () => {
    logger.info({ res });
  });
  next();
};

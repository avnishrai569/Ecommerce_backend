const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'avnishrai569@gmail.com',
    pass: 'Avnish123#'
  }
});

exports.sendOrderConfirmationEmail = async (userId, orderId) => {
  const mailOptions = {
    from: 'cossin322@gmail.com',
    to: 'avnishrai569@gmail.com', // Retrieve user's email from database
    subject: 'Order Confirmation',
    text: `Your order with ID ${orderId} has been placed successfully!`
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

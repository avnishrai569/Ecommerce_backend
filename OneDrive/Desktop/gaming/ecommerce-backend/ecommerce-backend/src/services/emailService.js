const nodemailer = require('nodemailer');
const { EMAIL_USER, EMAIL_PASS } = require('../config/email');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

async function sendOrderConfirmationEmail(to, orderDetails) {
    const mailOptions = {
        from: EMAIL_USER,
        to: to,
        subject: 'Order Confirmation',
        text: `Your order has been placed successfully! Details: ${orderDetails}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (err) {
        console.error('Error sending email', err);
    }
}

module.exports = { sendOrderConfirmationEmail };

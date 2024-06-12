function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  // functions/index.js

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Initialize Firebase Admin SDK
const firebaseConfig = {
  apiKey: "AIzaSyAmPBg8bJCpboHRbhn8wi7q89lgDmhIZJU",
  authDomain: "resume-portfolio-6106d.firebaseapp.com",
  projectId: "resume-portfolio-6106d",
  storageBucket: "resume-portfolio-6106d.appspot.com",
  messagingSenderId: "441386909491",
  appId: "1:441386909491:web:a757e0eb91361d105cc846",
  measurementId: "G-9S536VBX1V"
};

// Cloud Function to handle form submission and send email
exports.sendEmail = functions.https.onRequest(async (req, res) => {
  // Get form data from request body
  const { name, email, message } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zamatolosnmtolo@gmail.com',
      pass: 'ZinathiMtolo16*',
    },
  });

  // Email data
  const mailOptions = {
    from: email,
    to: 'zamatolosnmtolo@gmail.com',
    subject: 'Portfolio Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

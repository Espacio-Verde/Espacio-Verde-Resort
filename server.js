const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');  // Add this line

const app = express();
const port = 3000;

// Middleware to enable CORS
app.use(cors());  // Add this line to enable CORS

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up the email transporter using your email provider (e.g., Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail',  // You can use other services like Outlook or Yahoo
    auth: {
        user: 'adrigadolian@gmail.com',  // Your email address
        pass: 'pgosjcskmribetzo',  // Your email password (consider using environment variables for security)
    },
});

// POST route to handle reservation submissions
app.post('/submit-reservation', (req, res) => {
    const { name, email, date, room, specialRequests } = req.body;

    // Prepare the email content
    const mailOptions = {
        from: 'adrigadolian@gmail.com',  // Sender email address
        to: 'your-email@gmail.com',  // Recipient email address (can be your own email)
        subject: 'New Reservation',
        text: `You have a new reservation!\n\nName: ${name}\nEmail: ${email}\nReservation Date: ${date}\nRoom: ${room}\nSpecial Request: ${specialRequests}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
            return res.status(500).send('Error sending email.');
        }
        console.log('Email sent: ' + info.response);
        res.send('Reservation submitted successfully! A confirmation email has been sent.');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});





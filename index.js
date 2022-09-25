require('dotenv').config()
const nodemailer = require('nodemailer')

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASSWORD,
    }
})

let details = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'Testing Nodemailer',
    text: 'Testing Nodemailer',
}

mailTransporter.sendMail(details, (err) => {
    if (err) {
        console.log('It has an error', err)
    } else {
        console.log('Email has been sent!')
    }
})

const nodemailer = require('nodemailer')

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kaleb1.test@gmail.com',
        pass: 'fkecubczictwouzj',
    }
})

let details = {
    from: 'kaleb1.test@gmail.com',
    to: 'kaleb@pickupp.io',
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

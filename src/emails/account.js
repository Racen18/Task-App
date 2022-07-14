const nodemailer = require('nodemailer')

const sender = nodemailer.createTransport({
  service: process.env.SERVICE_PROVIDER,
  port: process.env.SERVICE_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SERVICE_PROVIDER_USER,
    pass: process.env.SERVICE_PROVIDER_PASS
  }
});

const sendWelcomeEmail = (email, name) => {
  sender.sendMail({
    to: email,
    from: process.env.SERVICE_PROVIDER_USER,
    subject: 'Thanks for signing in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancellationEmail = (email, name) => {
  sender.sendMail({
    to: email,
    from: process.env.SERVICE_PROVIDER_USER,
    subject: 'Sorry to see you go!',
    text: `Good Bye!, ${name}. I hope to see you back sometime soon.`
  })
}

module.exports = { 
  sendWelcomeEmail,
  sendCancellationEmail
}
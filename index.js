//https://mailtrap.io/blog/react-contact-form/
// https://www.gmass.co/smtp-test
//https://myaccount.google.com/apppasswords



var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
var transport = {
  logger: true, 
  debug: true,

  host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}
var transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
  var mail = {
    from: email,
    to: "greyhoundcoding@gmail.com",  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
       
      })
      
    }
  })
})
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3003)


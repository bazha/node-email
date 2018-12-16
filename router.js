'use strict';
const express = require('express');
const router = express.Router();
const smtpTransport = require('./nodemailer');

router.post('/send', (req, res) => {
  let mailOptions = {
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.text
  };
  smtpTransport.sendMail(mailOptions)
    .then(info =>{
      console.log(info);
      res.send('Message sent')
  })
    .catch(err => console.log(err))
});

module.exports = router;
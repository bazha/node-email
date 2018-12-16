'use strict';

const nodemailer = require("nodemailer");

let smtpTransport = nodemailer.createTransport(
  {
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: '...',
      pass: '...'
    },
    logger: false,
    debug: false
  });

module.exports = smtpTransport;
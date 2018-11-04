const express = require('express');
const app = express();

app.use(express.json());

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'jacobrichardjohnson94@gmail.com',
  from: 'yoMama@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>'
};
sgMail.send(msg);

app.listen(3021, () => console.log('Example app listening on port 3021!'));

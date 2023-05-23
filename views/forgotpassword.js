const nodemailer = require('nodemailer');
const Mailgen = require('mailgen')

const crypto = require('crypto')
const User = require('../db/User')

require('dotenv').config();



module.exports = (app) => {
    app.post("/forgotPassword",  (req, res) =>{

    if (req.body.email === '') {
      res.status(400).send('email required');
    }
    console.log('email',req.body.email);

    User.findOne({email: req.body.email}).then((user) => {
      if (user === null) {
        console.error('email not in database');
        res.status(403).send('email not in db');
        console.log(user);
      } else {
        const token = crypto.randomBytes(20).toString('hex');

        let nodeConfig = {
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user:'mishra.abhishek0712@gmail.com',
            pass: 'Abhigoogle0712',
          },
        };

        let transporter = nodemailer.createTransport(nodeConfig);

let MailGenerator = new Mailgen({
    theme: "default",
    product : {
        name: "Mailgen",
        link: 'https://mailgen.js/'
    }
})

  var email = {
    body : {
        name: 'username',
        intro : 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
        + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
        + `http://localhost:5000/reset/${token}\n\n`
        + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
    
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
}
var emailBody = MailGenerator.generate(email);

        let message = {
          from: 'mishra.abhishek0712@gmail.com',
          to: 'geetendra@greendeck.co',
          subject: 'Link To Reset Password',
          html : emailBody
        };

        transporter.sendMail(message)
        .then(() => {
            return res.status(200).send({ msg: "You should receive an email from us."})
        })
        .catch(error => console.log('error',error))

      }
    
  })
  });
};

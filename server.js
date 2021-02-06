require("dotenv").config();

const express = require("express");
// const cors = require("cors");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");

const app = express();

// Allow cors requests to send mail
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
})

transporter.verify(function (err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is ready to take messages');
  }
})

app.post("/send", (req, res) => {
  //1.
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });

    //2. You can configure the object however you want
    const mail = {
      from: data.email,
      to: process.env.EMAIL,
      subject: data.subject,
      text: `${data.name} <${data.email}> \n${data.message}`,
    };

    //3.
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).json({status: 'error'});
      } else {
        res.status(200).json({status: 'success'});
      }
    });
  });
});
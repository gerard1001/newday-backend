import nodemailer from "nodemailer";
import "dotenv/config";

export const sendEmail = async (message, toEmail) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });
  const mailOptions = {
    from: {
      name: "New Day",
      address: process.env.SENDER_EMAIL,
    },
    to: toEmail,
    subject: "NEWDAY REGISTRATION",
    html: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    res.render("contact", { msg: "Email successfully sent!!!" });
  });
};

export const sendTweet = async (message, toEmail) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });
  const mailOptions = {
    from: {
      name: "New Day",
      address: process.env.SENDER_EMAIL,
    },
    to: toEmail,
    subject: "TWEET FROM NEWDAY.",
    html: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    res.render("contact", { msg: "Tweet successfully sent!!!" });
  });
};

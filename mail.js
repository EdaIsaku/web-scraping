import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.GENERATED_PASSWORD,
  },
});

export const sendMail = (filename, path) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: "edaisaku0@gmail.com",
    subject: "Latest News!",
    text: "In attach you will found the latest news from shqiptarja.com",
    attachments: [
      {
        filename,
        path,
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("ERROR: ", error);
    } else {
      console.log("Email sent: " + info.response);
      // do something useful
    }
  });
};

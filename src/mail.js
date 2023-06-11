import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { logger } from "../utils/logger.js";

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
    text: "You will found attached latest news from shqiptarja.com",
    attachments: [
      {
        filename,
        path,
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      logger.error(error);
    } else {
      logger.info(info.response);
    }
  });
};

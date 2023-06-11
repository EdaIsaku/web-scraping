import winston, { format } from "winston";
const { timestamp, label, printf, combine, colorize } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = winston.createLogger({
  format: combine(colorize(), timestamp(), myFormat, label()),
  transports: [
    new winston.transports.File({
      filename: "combined.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "errors.log",
      level: "error",
      label: "test",
    }),
  ],
});

import { start } from "../src/script.js";
import puppeteer from "puppeteer";
import { logger } from "../utils/logger.js";

const browser = await puppeteer.launch({ headless: false });

start()
  .catch((err) => logger.error(err))
  .then(async () => {
    await browser.close();
  });

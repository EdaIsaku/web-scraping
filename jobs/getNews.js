import { start } from "../script.js";
import puppeteer from "puppeteer";

const browser = await puppeteer.launch({ headless: false });

start()
  .catch((err) => console.log("Error", err))
  .then(async () => {
    await browser.close();
  });

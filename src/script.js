import puppeteer from "puppeteer";
import fs from "fs";
import { getMainNews, collectDdataFromLink, savaDataInFile } from "./utils.js";
import { sendMail } from "./mail.js";
import { logger } from "../utils/logger.js";
const site = "https://shqiptarja.com/home";

const browser = await puppeteer.launch({ headless: false });

export const start = async () => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1300, height: 1024 });
  await page.goto(site, {
    timeout: 0,
  });
  const mainNews = await getMainNews(page);
  // Read the contents of the JSON file
  const data = fs.readFileSync("news.json");
  // Parse the JSON data into a JavaScript object
  const jsonData = JSON.parse(data);
  // Modify the JavaScript object by adding new data
  if (jsonData.length === 0) {
    jsonData.push(mainNews);
    savaDataInFile(jsonData, "news.json");
  }

  //add news if it's new
  jsonData.map((el) => {
    if (el.title !== mainNews.title) {
      jsonData.push(mainNews);
      savaDataInFile(jsonData, "news.json");
    } else {
      logger.info("News already added!");
    }
  });

  sendMail("news.json", "./news.json");

  // fs.watch("./news.json", { encoding: "buffer" }, (eventType) => {
  //   console.log("eventType", eventType);
  //   console.log("File changed");
  // });

  await page.goBack({
    waitUntil: "domcontentloaded",
  });
  await browser.close();
  // await collectDdataFromLink(page);
};

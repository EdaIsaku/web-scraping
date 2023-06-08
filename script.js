import puppeteer from "puppeteer";
import fs from "fs";
import { getMainNews, collectDdataFromLink } from "./utils.js";
import { sendMail } from "./mail.js";
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
  jsonData.length === 0 ? jsonData.push(mainNews) : "";
  jsonData.map((el) => {
    if (el.title !== mainNews.title) {
      jsonData.push(mainNews);
    } else {
      console.log("News already added!");
    }
  });
  const jsonString = JSON.stringify(jsonData);

  fs.writeFileSync("news.json", jsonString, "utf-8", (err) => {
    if (err) throw err;
    console.log("Data added to file");
  });
  sendMail("news.json", "./news.json");

  await page.goBack({
    waitUntil: "domcontentloaded",
  });
  await browser.close();
  // await collectDdataFromLink(page);
};

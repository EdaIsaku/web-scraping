import puppeteer from "puppeteer";
import fs from "fs";
import { getMainNews, collectDdataFromLink } from "./utils.js";
const site = "https://shqiptarja.com/home";

const browser = await puppeteer.launch({ headless: false });

export const start = async () => {
  //Open browser
  const page = await browser.newPage();
  // Set screen size
  await page.setViewport({ width: 1300, height: 1024 });
  await page.goto(site, {
    timeout: 0,
  });
  const mainNews = await getMainNews(page);
  fs.writeFileSync("myData.json", JSON.stringify(mainNews), (err) => {
    if (err) {
      throw err;
    }
    console.log("Saved!");
  });
  await page.goBack({
    waitUntil: "domcontentloaded",
  });
  // await collectDdataFromLink(page);
};

start()
  .catch((err) => console.log("Error", err))
  .then(async () => {
    await browser.close();
  });

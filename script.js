import puppeteer from "puppeteer";
import fs from "fs";

import { saveImage } from "./utils.js";

const site = "https://shqiptarja.com/home";

const getTitle = async (selector) => {
  const titleSelector = await page.waitForSelector(selector);
  const titleContent = await titleSelector?.evaluate((el) => el.textContent);
  return titleContent;
};

const getMainNews = async (page) => {
  const mainTitleSelector = "#main-title";
  await page.waitForSelector(mainTitleSelector);
  //get image URL
  const imageURL = await page.$$eval(".news_day_img_wrap img[src]", (imgs) =>
    imgs.map((img) => img.getAttribute("src"))
  );
  saveImage(imageURL[0]);
  await page.click(mainTitleSelector);
  //get title
  getTitle(".single-title");
  // const titleSelector = await page.waitForSelector(".single-title");
  // const titleContent = await titleSelector?.evaluate((el) => el.textContent);
  //get mainBody
  const paragraphs = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(".content .single-news .single_article_body p"),
      (p) => p.textContent
    ).reduce((acc, el) => {
      return acc + el;
    }, []);
  });

  let mainNews = {
    title: titleContent,
    body: paragraphs,
    imageURL,
  };
  return mainNews;
};
const getAllLinks = async (page) => {
  const hrefs = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(".swiper-slide a"),
      (a) => a.href
    )
      .filter((el, idx) => idx % 3 == 0)
      .slice(0, 1);
  });
  return hrefs;
};

const collectDdataFromLink = async (page) => {
  let topLastNews = {};
  const lastNewsLinks = await getAllLinks(page);
  lastNewsLinks.map(async (link) => {
    console.log(`Clicked link ${link}`);
    await page.goto(link);
    //main title
    const titleSelector = await page.waitForSelector(".single-title");
    const titleContent = await titleSelector?.evaluate((el) => el.textContent);
    //get mainBody
    const paragraphs = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll(
          ".content .single-news .single_article_body p"
        ),
        (p) => p.textContent
      ).reduce((acc, el) => {
        return acc + el;
      }, []);
    });
    //get image URL
    const imageURL = await page.$$eval(".image_wrapp img[src]", (imgs) =>
      imgs.map((img) => img.getAttribute("src"))
    );

    topLastNews = {
      ...topLastNews,
      title: titleContent,
      body: paragraphs,
      imageURL,
    };
  });
};

export const start = async () => {
  //Open browser
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  await page.goto(site, {
    timeout: 0,
  });

  const mainNews = await getMainNews(page);
  fs.appendFile("myData.json", JSON.stringify(mainNews), (err) => {
    if (err) {
      throw err;
    }
    console.log("Saved!");
  });

  await page.goBack({
    waitUntil: "domcontentloaded",
  });

  await collectDdataFromLink(page);
  await browser.close();
};

start().catch((err) => console.log("Error", err));

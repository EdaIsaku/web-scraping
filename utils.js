import fs from "fs";
import https from "https";

const setImageName = (imageURL) => {
  const truncateURL = imageURL?.split("/");
  return truncateURL[truncateURL.length - 1];
};

const saveImage = async (imageURL) => {
  const folderName = "./images";
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
  const imageName = setImageName(imageURL);
  const file = fs.createWriteStream(`./images/${imageName}`);
  https
    .get(imageURL, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`Image downloaded as ${imageName}`);
      });
    })
    .on("error", (err) => {
      fs.unlink(imageName);
      console.error(`Error downloading image: ${err.message}`);
    });
};

export const getTitle = async (selector, page) => {
  const titleSelector = await page.waitForSelector(selector);
  const titleContent = await titleSelector?.evaluate((el) => el.textContent);
  return titleContent;
};

export const getMainBody = async (page) => {
  const paragraphs = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(".content .single-news .single_article_body p"),
      (p) => p.textContent
    ).reduce((acc, el) => {
      return acc + el;
    }, []);
  });
  return paragraphs;
};

export const getImageURL = async (selector, page) => {
  const imageURL = await page.$$eval(selector, (imgs) =>
    imgs.map((img) => img.getAttribute("src"))
  );
  return imageURL;
};

export const getMainNews = async (page) => {
  const mainTitleSelector = "#main-title";
  await page.waitForSelector(mainTitleSelector);
  const imageURL = await getImageURL(".news_day_img_wrap img[src]", page);
  saveImage(imageURL[0]);
  await page.click(mainTitleSelector);
  const title = await getTitle(".single-title", page);
  const body = await getMainBody(page);
  let mainNews = {
    title,
    body,
    imageURL,
  };
  return mainNews;
};

export const getAllLinks = async (page) => {
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

export const collectDdataFromLink = async (page) => {
  let topLastNews = {};
  const lastNewsLinks = await getAllLinks(page);
  lastNewsLinks.map(async (link) => {
    await page.goto(link);
    const title = getTitle(".single-title");
    const body = await getMainBody(
      ".content .single-news .single_article_body p",
      page
    );
    const imageURL = await getImageURL(".image_wrapp img[src]", page);

    topLastNews = {
      ...topLastNews,
      title,
      body,
      imageURL,
    };
    await page.goBack({
      waitUntil: "domcontentloaded",
    });
  });
};

import fs from "fs";
import https from "https";

const setImageName = (imageURL) => {
  const truncateURL = imageURL?.split("/");
  return truncateURL[truncateURL.length - 1];
};

export const saveImage = async (imageURL) => {
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

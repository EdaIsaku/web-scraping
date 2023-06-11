import "dotenv/config";
import Bree from "bree";

export const bree = new Bree({
  jobs: [
    {
      name: "Call Script",
      path: "./jobs/getNews.js",
      interval: "5 m",
    },
  ],
});

bree.start();

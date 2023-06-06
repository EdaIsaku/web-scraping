import "dotenv/config";
import Bree from "bree";

export const bree = new Bree({
  jobs: [
    {
      name: "Call Script",
      path: "./jobs/test.js",
      interval: "5m",
    },
  ],
});

bree.start();

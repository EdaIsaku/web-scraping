import Bree from "bree";

export const bree = new Bree({
  jobs: [
    {
      name: "Call Script",
      path: "./jobs/test.js",
      interval: "every 2 seconds",
    },
  ],
});

bree.start();

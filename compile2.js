//node compile.js or nodemon compile.js -e js,pug

const pug = require("pug");
const fs = require("fs");

const param = {
  name: "IoT Project Factory",
  impressionCountOfPosts: [
    {
      id: "46A3twh0Qvc6GehP8A5X",
      totalImpressions: 3,
      totalEngagement: 0,
    },
  ],
  growOfPost: {
    instagram: {
      impressionInstragrameGrowth: 3,
      reachInstragrameGrowth: NaN,
      followsInstragrameGrowth: NaN,
      postCountInstragrameGrowth: 1,
    },
    linkdin: {
      impressionLinkdinGrowth: "Set Up!",
      reachLinkdinGrowth: "Set Up!",
      followsLinkdinGrowth: "Set Up!",
      postCountLinkdinGrowth: "Set Up!",
    },
    facebook: {
      impressionFacebookGrowth: "Set Up!",
      reachFacebookGrowth: "Set Up!",
      followsFacebookGrowth: "Set Up!",
      postCountFacebookGrowth: "Set Up!",
    },
  },
  formattedMonthDate: "June 2024",
  growthFactor1: "Followers",
  chart1Label: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  chart1data1: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
  chart1data2: [200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310],
  growthFactor2: "Impressions",
  chart2Label: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  chart2data1: [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100],
  chart2data2: [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100],
  growthFactor3: "Reach",
  chart3Label: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  chart3data1: [250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500, 525],
  chart3data2: [350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625],
  growthFactor4: "Engagement Rate",
  chart4Label: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  chart4data1: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210],
  chart4data2: [200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310],
};


// Compile the Pug template to HTML
const compiledFunction = pug.compileFile("emailTemplate-1-v2.pug");

// Write the HTML to a file
fs.writeFileSync("emailTemplate-1-v2.html", compiledFunction(param));

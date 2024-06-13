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
};

// Compile the Pug template to HTML
const compiledFunction = pug.compileFile("emailTemplate.pug");

// Write the HTML to a file
fs.writeFileSync("emailTemplate.html", compiledFunction(param));

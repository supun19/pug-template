//node compile.js or nodemon compile.js -e js,pug

const pug = require("pug");
const fs = require("fs");

const param = {
  name: 'IoT Project Factory',
  impressionCountOfPosts: [
    {
      id: 'bXv2xDjf2zzF7XFTHmsk',
      totalImpressions: 5,
      totalEngagement: 1
    }
  ],
  growOfPost: {
    instagram: {
      followers: 5,
      followersGrowth: '100%',
      impressions: 0,
      impressionsGrowth: '0%',
      reach: 26,
      reachGrowth: '100%',
      engagementRate: '2.9%'
    },
    facebook: {
      followers: 1,
      followersGrowth: '100%',
      impressions: 0,
      impressionsGrowth: '0%',
      reach: 1,
      reachGrowth: '100%',
      engagementRate: '0%'
    }
  },
  formattedMonthDate: 'June 2024',
  followersGrowthUrl: 'https://realtor-storage233045-dev.s3.us-east-2.amazonaws.com/d35146af-975e-4258-826d-a6714544af52/1719206137610/followers.png',
  impressionGrowthUrl: 'https://realtor-storage233045-dev.s3.us-east-2.amazonaws.com/d35146af-975e-4258-826d-a6714544af52/1719206145412/impressions.png',
  reachGrowthUrl: 'https://realtor-storage233045-dev.s3.us-east-2.amazonaws.com/d35146af-975e-4258-826d-a6714544af52/1719206150202/reach.png',
  engagementGrowthUrl: 'https://realtor-storage233045-dev.s3.us-east-2.amazonaws.com/d35146af-975e-4258-826d-a6714544af52/1719206156436/engagement.png',
  filterdMediaUrls: [
    'https://realtor-storage233045-dev.s3.us-east-2.amazonaws.com/jignesh78bmw@gmail.com/2024-06-18/template-image-5-94d77b2b2a0a2a98/789ee3ae-fb0f-4117-a2c4-0cdb00753b1f'
  ]
}

// Compile the Pug template to HTML
const compiledFunction = pug.compileFile("emailTemplate.pug");

// Write the HTML to a file
fs.writeFileSync("emailTemplate.html", compiledFunction(param));

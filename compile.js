//node compile.js or nodemon compile.js -e js,pug

const pug = require('pug');
const fs = require('fs');

// Compile the Pug template to HTML
const compiledFunction = pug.compileFile('email-template-1.pug');

// Write the HTML to a file
fs.writeFileSync('email-template-1.html', compiledFunction());

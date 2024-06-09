const pug = require('pug');
const fs = require('fs');

// Compile the Pug template to HTML
const compiledFunction = pug.compileFile('email-template-2.pug');

// Write the HTML to a file
fs.writeFileSync('email-template-2.html', compiledFunction());

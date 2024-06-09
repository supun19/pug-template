const pug = require('pug');
const fs = require('fs');

// Compile the Pug template to HTML
const compiledFunction = pug.compileFile('email-template.pug');

// Write the HTML to a file
fs.writeFileSync('email-template.html', compiledFunction());

const fs = require('fs');
const data = require('./src/data/newsletter-data.json');
const fileContents = require('./src/template');
fs.writeFileSync('./dist/index.html', fileContents);
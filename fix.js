const fs = require('fs');
let content = fs.readFileSync('generate_pages.js', 'utf8');
content = content.replace(/\\\\\/g, '"').replace(/\\\/g, '"');
fs.writeFileSync('generate_pages.js', content);

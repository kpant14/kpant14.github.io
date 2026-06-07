const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const shell = fs.readFileSync(path.join(srcDir, '_shell.html'), 'utf8');

const result = shell.replace(/<!-- include: (.+?) -->/g, (_, file) => {
  const filePath = path.join(srcDir, file.trim());
  if (!fs.existsSync(filePath)) {
    console.error(`Missing include: ${filePath}`);
    process.exit(1);
  }
  return fs.readFileSync(filePath, 'utf8');
});

fs.writeFileSync(path.join(__dirname, 'index.html'), result, 'utf8');
console.log('Built index.html');

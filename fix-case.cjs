// fix-case.js
const fs = require("fs");
const path = require("path");

const walkDir = (dir) => {
  let files = [];
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(walkDir(fullPath));
    } else {
      files.push(fullPath);
    }
  });
  return files;
};

// Get all files in src
const allFiles = walkDir(path.join(__dirname, "src"));

// Map lowercase filenames to actual case
const fileMap = {};
allFiles.forEach((f) => {
  const relative = path.relative(__dirname, f).replace(/\\/g, "/");
  fileMap[relative.toLowerCase()] = relative;
});

// Fix import statements
allFiles.forEach((f) => {
  if (!f.endsWith(".js") && !f.endsWith(".jsx")) return;
  let content = fs.readFileSync(f, "utf-8");
  let updated = content.replace(/from\s+['"](.+?)['"]/g, (_, impPath) => {
    const absPath = path.join(path.dirname(f), impPath);
    const relPath = path.relative(__dirname, absPath).replace(/\\/g, "/");
    const fixed = fileMap[relPath.toLowerCase()];
    if (fixed && fixed !== relPath) {
      let newImp = path.relative(path.dirname(f), fixed).replace(/\\/g, "/");
      if (!newImp.startsWith(".")) newImp = "./" + newImp;
      return `from '${newImp}'`;
    }
    return `from '${impPath}'`;
  });
  if (updated !== content) fs.writeFileSync(f, updated, "utf-8");
});

console.log("All import paths fixed to match actual filenames.");

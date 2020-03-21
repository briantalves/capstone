const fc = require("fs");

function writeJSONFile(filename, content) {
  fc.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = {
  writeJSONFile
};

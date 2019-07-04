const fs = require('fs');

const getFilesizeInBytes = function(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};

console.log(getFilesizeInBytes("./tmp/index.html"));
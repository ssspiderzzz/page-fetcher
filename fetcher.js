
const net = require('net');
const conn = net.createConnection({
  host: 'www.example.com',
  port: 80
});
conn.setEncoding('UTF8');
const fs = require('fs');


const request = require('request');
request('http://www.example.com', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:\n', body);
  download(body);
  conn.end();
});

const download = function(content) {
  fs.writeFile("./tmp/index.html", content, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Downloaded and saved ${(getFilesizeInBytes("./tmp/index.html"))} bytes to ./temp/index.html`);
  });
};

const getFilesizeInBytes = function(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};
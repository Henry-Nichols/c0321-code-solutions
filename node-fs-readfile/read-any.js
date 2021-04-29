const fs = require('fs');
let fileName = process.argv[2]

fs.readFile(fileName, 'utf8', (err,data) => {
  (err) ? console.log(err) : console.log(data)
});

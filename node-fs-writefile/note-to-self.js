const fs = require('fs');
let fileInput = process.argv[2];

fs.writeFile('note.txt', fileInput + '\n', (err) => {
  (err) ? console.log(err) : console.log('it worked')
});

const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf8', (err,data) => {
  (err) ? console.log(err) : console.log(data)
});

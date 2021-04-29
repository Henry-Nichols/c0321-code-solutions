const fs = require('fs')

fs.writeFile('random.txt', Math.random() + '\n', (err) => {
  (err) ? console.log(err) :  console.log('it worked')
});

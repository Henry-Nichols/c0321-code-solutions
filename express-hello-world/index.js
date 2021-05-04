const express = require('express')
const app = express();

app.use(function (req, res) {
  console.log('Time:', Date.now());
  res.send('Hello WOrld from henry')
});

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});

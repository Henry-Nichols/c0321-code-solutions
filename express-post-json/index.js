const express = require('express')
let nextId = 1;
const grades = [];
const app = express()

app.get('/api/grades', (req, res) => {
  res.json(grades)
});

const jsonMw = express.json()
app.use(jsonMw);

app.post('/api/grades', (req, res) => {

  console.log(req.body);
  let grade = req.body;
  grade.id = nextId++;
  grades.push(grade)
  res.send(grade)
});

app.listen(3000, () => {
  console.log('Listening on port 3000!')
});

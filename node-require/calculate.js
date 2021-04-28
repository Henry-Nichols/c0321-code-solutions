const add = require('./add');
const subtract = require('./subtract');
const mutliply = require('./multiply');
const divide = require('./divide');

const calculator = () => {
  let result = 0;
  if (process.argv[3] === 'minus') {
    result = subtract(process.argv[2], process.argv[4])
  }
  if (process.argv[3] === 'plus') {
    result = add(process.argv[2], process.argv[4])
  }
  if (process.argv[3] === 'times') {
    result = mutliply(process.argv[2], process.argv[4])
  }
  if (process.argv[3] === 'over') {
    result = divide(process.argv[2], process.argv[4])
  }
  return (` Result: ${result}`)
}
console.log(calculator())

const takeAChance = require('./take-a-chance');

const promise = takeAChance('Henry Nichols');

promise.then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.message)
});

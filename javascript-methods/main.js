var numbers = [400101, 2020, 800];
var maximumValue = Math.max(...numbers);

console.log('maximumValue:', maximumValue);

var heroes = ['Spiderman', 'Batman', 'Wanda Maximoff', 'Vision'];
var randomNumber = Math.random(...heroes);
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Blockchain Revolution: How the Technology Behind Bitcoin Is Changing Money, Business, and the World',
    author: 'Don Tapscott'
  },
  {
    title: 'The Currency Cold War: Cash and Cryptography, Hash Rates and Hegemony',
    author: 'David G. W. Birch'
  },
  {
    title: 'The Modern Guide to Stock Market Investing for Teens: How to Ensure a Life of Financial Freedom Through the Power of Investing.',
    author: 'Alan John'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Henry Nichols';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName', sayMyName);

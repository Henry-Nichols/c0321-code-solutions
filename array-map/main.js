const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const doubled = numbers.map(number => number * 2);
console.log(doubled);

const prices = numbers.map(number => `$${number}.00`);
console.log(prices);

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const upperCased = languages.map(language => language.toUpperCase());
console.log(upperCased);

const firstLetters = languages.map(language => language.charAt(0));
console.log(firstLetters);

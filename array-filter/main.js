const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

const greater5 = numbers.filter(number => number > 5);
console.log(greater5);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const startWithE = names.filter(name => name.startsWith('E'));
console.log(startWithE);

const haveD = names.filter(name => name.indexOf('d') > -1 || name.indexOf('D') > -1);
console.log(haveD);

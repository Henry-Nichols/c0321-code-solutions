const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const sum = numbers.reduce((total, currentAmount) => total + currentAmount);
console.log(sum);

const product = numbers.reduce((total, currentAmount) => total * currentAmount);
console.log(product);

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const balance = account.reduce((total, currentAmount) => currentAmount.type === 'deposit' ? total + currentAmount.amount : total - currentAmount.amount, 0);
console.log(balance);

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const composite = traits.reduce((total, currentAmount) => Object.assign(total, currentAmount));
console.log('Pikachu:', composite);

var books = [{ isbn: '978-0156012195', title: 'The Little Prince', author: 'Antoine de Saint-Exupéry' },
  { isbn: '978-0060887964', title: 'The Alchemist', author: 'Paulo Coelho' },
  { isbn: '978-0451524935', title: '1984', author: 'George Orwell' }];

console.log(books, typeof books);

console.log(JSON.stringify(books), typeof books);

var student = '{' +
  '"Number id" : "299513512",' +
  '"String Name"  : "Henry"' +
  '}';

console.log(student, typeof student);

var obj = JSON.parse(student);

console.log(obj, typeof obj);

console.log('hello, world');

var temp = document.querySelector('h1');
console.log('$heading', temp);
console.dir(temp);

var tempTwo = document.querySelector('#explanation');
console.log('$explanation', tempTwo);
console.dir(tempTwo);

var tempThree = document.querySelector('.hint');
console.log('$hint', tempThree);
console.dir(tempThree);

var tempFour = document.querySelectorAll('p');
var nodeTemp = tempFour;
console.log('$paragraphs', nodeTemp);

var tempFive = document.querySelectorAll('.example-link');
var nodeTempTwo = tempFive;
console.log('$links', nodeTempTwo);

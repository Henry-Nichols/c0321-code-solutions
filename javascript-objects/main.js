'use strict';
var student = {
  firstName: 'Henry',
  lastName: 'Nichols',
  age: 19
};
var fullName = student.firstName + ' ' + student.lastName;
student.livesinIrvine = false;
student.previousOccupation = 'Student';

console.log('value of fullName:', fullName);
console.log('value of student.livesinIrvine:', student.livesinIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Tesla',
  model: 'Model 3',
  year: '2021'
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Rufus',
  type: 'dog'
};
delete pet.name;
delete pet.type;

console.log('value of pet:', pet);

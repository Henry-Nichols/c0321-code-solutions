/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var p = person.firstName;
  var firstInitial = p.charAt(0);
  var q = person.lastName;
  var secondInitial = q.charAt(0);
  return firstInitial + secondInitial;
}

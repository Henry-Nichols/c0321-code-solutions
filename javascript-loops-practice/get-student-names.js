/* exported getStudentNames */
function getStudentNames(students) {
  var values = [];
  for (var i = 0; i < students.length; ++i) {
    var student = students[i];
    values.push(student.name);
  }
  return values;
}

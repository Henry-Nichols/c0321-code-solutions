/* exported filterOutNulls */
function filterOutNulls(values) {
  var result = [];
  for (var i = 0; i < values.length; i++) {
    var temp = values[i];
    if (temp !== null) {
      result.push(temp);
    }
  }
  return result;
}

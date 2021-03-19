/* exported filterOutStrings */
function filterOutStrings(values) {
  var result = [];
  for (var i = 0; i < values.length; i++) {
    var temp = values[i];
    if (typeof values[i] !== 'string') {
      result.push(temp);
    }
  }
  return result;
}

/* exported includesSeven */
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    if (temp === 7) {
      return true;
    }
  }
  return false;
}

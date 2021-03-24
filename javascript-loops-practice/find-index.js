/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    if (temp === value) {
      return i;
    }
  }
  return -1;
}

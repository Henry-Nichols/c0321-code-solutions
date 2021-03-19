/* exported compact */
function compact(array) {
  var arrayGood = [];
  var negative = -0;
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] !== false &&
      array[i] !== null &&
      array[i] !== negative &&
      array[i] !== undefined &&
      array[i] !== '' &&
      !Number.isNaN(array[i])) {
      arrayGood.push(array[i]);
    }
  }
  return arrayGood;
}

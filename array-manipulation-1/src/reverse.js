/* exported reverse */
function reverse(array) {
  var arrV2 = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arrV2.push(array[i]);
  }
  return arrV2;
}

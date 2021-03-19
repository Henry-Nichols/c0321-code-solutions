/* exported oddOrEven */
function oddOrEven(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    if (temp % 2 === 0) {
      result.push('even');
    }
    if (temp % 2 !== 0) {
      result.push('odd');
    }
  }
  return result;
}

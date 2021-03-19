/* exported sumAll */
function sumAll(numbers) {
  var storage = 0;
  for (var i = 0; i < numbers.length; i++) {
    storage += numbers[i];
  }
  return storage;
}

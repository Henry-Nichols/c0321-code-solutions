/* exported countdown */
function countdown(number) {
  var storage = [];
  for (var i = number; i >= 0; i--) {
    storage.push(i);
  }
  return storage;
}

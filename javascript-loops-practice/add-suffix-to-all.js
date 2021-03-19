/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var results = [];
  for (var i = 0; i < words.length; i++) {
    var temp = words[i];
    temp = temp + suffix;
    words[i] = temp;
    results.push(words[i]);
  }
  return results;
}

/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var results = [];
  for (var i = 0; i < words.length; i++) {
    var temp = words[i];
    temp = temp + suffix;
    results.push(temp);
  }
  return results;
}

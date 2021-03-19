/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  for (var i = 0; i < words.length; i++) {
    var temp = words[i];
    temp = temp + suffix;
    words[i] = temp;
  }
  return words;
}

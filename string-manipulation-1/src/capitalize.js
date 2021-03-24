/* exported capitalize */
function capitalize(word) {
  var lower = word.toLowerCase();
  var upperCase = lower.charAt(0).toUpperCase() + lower.slice(1);
  return upperCase;
}

/* exported isVowel */
function isVowel(character) {
  var vowel = 'aeiouAEIOU';
  if (vowel.indexOf(character) !== -1) {
    return true;
  } else {
    return false;
  }
}

/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.trim().split(' ');
}

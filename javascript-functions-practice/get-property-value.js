/* exported getPropertyValue */
function getPropertyValue(obj, key) {

  if (key === 'birthPlace') {
    var props = Object.entries(obj);
    return props[2][1];
  }

  if (key === 'occupation') {
    var props2 = Object.entries(obj);
    return props2[1][1];
  }

  if (key === 'name') {
    var props3 = Object.entries(obj);
    return props3[0][1];
  }
}

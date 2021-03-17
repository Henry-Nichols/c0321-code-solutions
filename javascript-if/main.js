/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// var isUnderFive = number => { return number < 5; };

function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  return false;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function startsWithJ(string) {
  if (string.startsWith('J')) {
    return true;
  } else if (string.startsWith('j')) {
    return true;
  }
  return false;
}

function isOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false;
  }
  return true;
}

function isOldEnoughToDrive(person) {
  if (person.age < 16) {
    return false;
  }
  return true;
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute";
  } else if (name !== 'yakko' && name !== 'wakko' && name !== 'dot') {
    return 'Goodnight everybody!';
  }
}

function countLetters(string) {
  var strCount = {};
  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      continue;
    } else if (strCount[string[i]] === undefined) {
      strCount[string[i]] = 1;
    } else {
      strCount[string[i]] ++;
    }
  }
  return strCount;
}

console.log(countLetters("lighthouse in the house"));
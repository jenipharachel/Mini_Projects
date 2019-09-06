function rot13(str) {
  var newStr = "";
  var decodedChar = "";
  for (var i = 0; i < str.length; i++) {
    if (/[A-M]/.test(str[i]) == true) {
      decodedChar = String.fromCharCode(str.charCodeAt(i) + 13);
    } else if (/[N-Z]/.test(str[i]) == true) {
      decodedChar = String.fromCharCode(str.charCodeAt(i) - 13);
    } else {
      decodedChar = str[i];
    }
    newStr = newStr + decodedChar;
  }
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

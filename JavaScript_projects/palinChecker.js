function palindrome(str) {
  var regExp = /[\W_]/;
  var revStr = str
    .split(regExp)
    .join("")
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  str = revStr
    .split("")
    .reverse()
    .join("");
  if (str == revStr) return true;
  else return false;
}

palindrome("eye");

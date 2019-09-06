function telephoneCheck(str) {
  // Good luck!
  var justNum = str.split(/[()-]/).join("");
  if (
    (str.startsWith("1") == true &&
      str[1] != "0" &&
      !str.includes("!") == true &&
      ((str.includes("(") == true && str.includes(")") == true) ||
        (str.includes("(") == false && str.includes(")") == false))) ||
    (str.startsWith("(") == true &&
      str.includes("(", 2) == false &&
      str.includes(")") == true &&
      str.length > 12 &&
      justNum.length == 10) ||
    (str.includes("-") == true && str.length == 12) ||
    str.length == 10
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(telephoneCheck("(275)76227382"));

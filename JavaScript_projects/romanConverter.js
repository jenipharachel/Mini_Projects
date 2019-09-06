function convertToRoman(num) {
  //num is 3693
  var roman = [];
  var quo = 0;
  for (var i = 0; num > 0; i++) {
    if (num >= 1 && num < 10) {
      quo = parseInt(num / 1); //3
      num = 0;
      if (quo >= 5) {
        var diff = quo - 5;
        if (diff <= 3) {
          roman.push("V");
          for (let k = 0; k < diff; k++) {
            roman.push("I");
          }
        } else {
          roman.push("IX");
        }
      } else if (quo < 5) {
        if (quo < 4) {
          for (let k = 0; k < quo; k++) {
            roman.push("I");
          }
        } else {
          roman.push("IV");
        }
      }
    } else if (num >= 10 && num < 100) {
      quo = parseInt(num / 10); //9
      console.log(quo);
      num = num % 10; //3
      if (quo >= 5) {
        var diff = quo - 5;
        if (diff <= 3) {
          roman.push("L");
          for (let k = 0; k < diff; k++) {
            roman.push("X");
          }
        } else {
          roman.push("XC");
        }
      } else if (quo < 5) {
        if (quo < 4) {
          for (let k = 0; k < quo; k++) {
            roman.push("X");
          }
        } else {
          roman.push("XL");
        }
      }
    } else if (num >= 100 && num < 1000) {
      quo = parseInt(num / 100); //6
      num = num % 100; //93
      if (quo >= 5) {
        var diff = quo - 5;
        if (diff <= 3) {
          roman.push("D");
          for (let k = 0; k < diff; k++) {
            roman.push("C");
          }
        } else {
          roman.push("CM");
        }
      } else if (quo < 5) {
        if (quo < 4) {
          for (let k = 0; k < quo; k++) {
            roman.push("C");
          }
        } else {
          roman.push("CD");
        }
      }
    } else if (num >= 1000 && num < 5000) {
      quo = parseInt(num / 1000); //quo is 3
      num = num % 1000; //rem is 693

      for (let j = 0; j < quo; j++) {
        roman.push("M");
      }
    }
  }
  var res = roman.join("");
  console.log(res);
  return res;
}

convertToRoman(12);

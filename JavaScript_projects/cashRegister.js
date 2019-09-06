function checkCashRegister(price, cash, regCash) {
  var cid = regCash;
  console.log(cid);
  var changeOfCash = cash - price;
  console.log(changeOfCash);
  var output2Customer = { status: "", change: [] };
  // Here is your change, ma'am.

  var totCid = 0;
  for (var i = 0; i < cid.length; i++) {
    totCid = totCid + cid[i][1];
  }
  console.log(totCid);

  if (totCid == cash - price) {
    output2Customer["change"] = regCash;
    changeOfCash = 0;
  } else {
    if (changeOfCash >= 100) {
      //Hundred $

      let hundred = 0;
      while (changeOfCash >= 100 && cid[8][1] >= 100) {
        changeOfCash = parseFloat((changeOfCash - 100).toFixed(2));
        cid[8][1] = parseFloat((cid[8][1] - 100).toFixed(2));

        hundred += 100;
        console.log("availablecash: ", changeOfCash);
      }
      console.log(hundred);
      if (hundred > 0) {
        let arr = ["ONE HUNDRED", hundred];
        output2Customer["change"].push(arr);
      }
    }
    console.log(output2Customer);
    if (changeOfCash >= 20) {
      //Twenty $

      let twenty = 0;
      while (changeOfCash >= 20 && cid[7][1] >= 20) {
        changeOfCash = parseFloat((changeOfCash - 20).toFixed(2));
        cid[7][1] = parseFloat((cid[7][1] - 20).toFixed(2));

        twenty += 20;
        console.log("availablecash: ", changeOfCash);
      }
      console.log(twenty);
      if (twenty > 0) {
        let arr = ["TWENTY", twenty];
        output2Customer["change"].push(arr);
      }
    }
    console.log(output2Customer);
    if (changeOfCash >= 10) {
      //Ten $

      let ten = 0;
      while (changeOfCash >= 10 && cid[6][1] >= 10) {
        changeOfCash = parseFloat((changeOfCash - 10).toFixed(2));
        cid[6][1] = parseFloat((cid[6][1] - 10).toFixed(2));

        ten += 10;
        console.log("availablecash: ", changeOfCash);
      }
      console.log(ten);
      if (ten > 0) {
        let arr = ["TEN", ten];
        output2Customer["change"].push(arr);
      }
    }
    console.log(output2Customer);
    if (changeOfCash >= 5) {
      //Five $

      let five = 0;
      while (changeOfCash >= 5 && cid[5][1] >= 5) {
        changeOfCash = parseFloat((changeOfCash - 5).toFixed(2));
        cid[5][1] = parseFloat((cid[5][1] - 5).toFixed(2));

        five += 5;
        console.log("availablecash: ", changeOfCash);
      }
      console.log(five);
      if (five > 0) {
        let arr = ["FIVE", five];
        output2Customer["change"].push(arr);
      }
    }
    console.log(output2Customer);
    if (changeOfCash >= 1) {
      //Dollar

      let dollar = 0;
      while (changeOfCash >= 1 && cid[4][1] >= 1) {
        changeOfCash = parseFloat((changeOfCash - 1).toFixed(2));
        cid[4][1] = parseFloat((cid[4][1] - 1).toFixed(2));

        dollar += 1;
        console.log("availablecash: ", changeOfCash);
      }
      console.log(dollar);
      if (dollar > 0) {
        let arr = ["ONE", dollar];
        output2Customer["change"].push(arr);
      }
    }
    console.log(output2Customer);
    if (changeOfCash >= 0.25) {
      //Quarter

      let quart = 0;
      while (changeOfCash >= 0.25 && cid[3][1] >= 0.25) {
        changeOfCash = parseFloat((changeOfCash - 0.25).toFixed(2));
        cid[3][1] = parseFloat((cid[3][1] - 0.25).toFixed(2));

        quart += 0.25;
        console.log("availablecash: ", changeOfCash);
      }

      console.log(quart);
      if (quart > 0) {
        let arr = ["QUARTER", quart];
        output2Customer["change"].push(arr);
      }
    }
    console.log(output2Customer);
    if (changeOfCash >= 0.1) {
      //Dime

      let dime = 0;
      while (changeOfCash >= 0.1 && cid[2][1] >= 0.1) {
        changeOfCash = parseFloat((changeOfCash - 0.1).toFixed(2));

        cid[2][1] = parseFloat((cid[2][1] - 0).toFixed(2));
        dime += 0.1;
        console.log("availablecash: ", changeOfCash);
      }
      console.log(dime);
      if (dime > 0) {
        let arr = ["DIME", dime];
        output2Customer["change"].push(arr);
      }
    }
    console.log(output2Customer);
    if (changeOfCash >= 0.05) {
      //Nickel

      let nickel = 0;
      while (changeOfCash >= 0.05 && cid[1][1] >= 0.05) {
        changeOfCash = parseFloat((changeOfCash - 0.05).toFixed(2));
        cid[1][1] = parseFloat((cid[1][1] - 0.05).toFixed(2));
        nickel += 0.05;
        console.log("availablecash: ", changeOfCash);
      }
      console.log(nickel);
      if (nickel > 0) {
        let arr = ["NICKEL", nickel];
        output2Customer["change"].push(arr);
      }
    }
    console.log("availablecash: ", changeOfCash);
    console.log(output2Customer);
    if (changeOfCash >= 0.01) {
      //Penny

      let penny = 0;
      while (changeOfCash >= 0.01 && cid[0][1] >= 0.01) {
        changeOfCash = parseFloat((changeOfCash - 0.01).toFixed(2));
        cid[0][1] = parseFloat((cid[0][1] - 0.01).toFixed(2));
        penny += 0.01;
        console.log("availablecash: ", changeOfCash);
      }
      console.log(penny);
      if (penny > 0) {
        let arr = ["PENNY", penny];
        output2Customer["change"].push(arr);
      }
    }
  }

  console.log(output2Customer);

  if (changeOfCash !== 0) {
    output2Customer["status"] = "INSUFFICIENT_FUNDS";
    output2Customer["change"] = [];
  } else if (changeOfCash == 0 && regCash !== output2Customer["change"]) {
    output2Customer["status"] = "OPEN";
  } else if (changeOfCash == 0 && regCash == output2Customer["change"]) {
    output2Customer["status"] = "CLOSED";
  }
  console.log(regCash);
  console.log(output2Customer);
  return output2Customer;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);

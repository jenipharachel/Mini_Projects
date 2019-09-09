function checkCashRegister(price, cash, regCash) {
  var cid = regCash;
  console.log(cid);
  var changeOfCash = cash - price;
  console.log(changeOfCash);
  var output2Customer = { status: "", change: [] }; // Here is your change, ma'am.
  var totCid = 0;
  for (var i = 0; i < cid.length; i++) {
    totCid = totCid + cid[i][1];
  }
  console.log(totCid);

  function changeCheck(denomination, changeToGive, changeAvailable, str) {
    let money = 0;
    while (changeToGive >= denomination && changeAvailable >= denomination) {
      changeToGive = parseFloat((changeToGive - denomination).toFixed(2));
      changeAvailable = parseFloat((changeAvailable - denomination).toFixed(2));
      money += denomination;
      console.log("availablecash: ", changeToGive);
    }
    console.log(money);
    if (money > 0) {
      let arr = [str, money];
      output2Customer["change"].push(arr);
    }
    return changeToGive;
  }

  if (totCid == cash - price) {
    output2Customer["change"] = regCash;
    changeOfCash = 0;
  } else {
    if (changeOfCash >= 100) {
      //Hundred $
      changeOfCash = changeCheck(100, changeOfCash, cid[8][1], "ONE HUNDRED");
    }
    console.log(output2Customer);
    if (changeOfCash >= 20) {
      //Twenty $
      changeOfCash = changeCheck(20, changeOfCash, cid[7][1], "TWENTY");
    }
    console.log(output2Customer);
    if (changeOfCash >= 10) {
      //Ten $
      changeOfCash = changeCheck(10, changeOfCash, cid[6][1], "TEN");
    }
    console.log(output2Customer);
    if (changeOfCash >= 5) {
      //Five $
      changeOfCash = changeCheck(5, changeOfCash, cid[5][1], "FIVE");
    }
    console.log(output2Customer);
    if (changeOfCash >= 1) {
      //Dollar
      changeOfCash = changeCheck(1, changeOfCash, cid[4][1], "ONE");
    }
    console.log(output2Customer);
    if (changeOfCash >= 0.25) {
      //Quarter
      changeOfCash = changeCheck(0.25, changeOfCash, cid[3][1], "QUARTER");
    }
    console.log(output2Customer);
    if (changeOfCash >= 0.1) {
      //Dime
      changeOfCash = changeCheck(0.1, changeOfCash, cid[2][1], "DIME");
    }
    console.log(output2Customer);
    if (changeOfCash >= 0.05) {
      //Nickel
      changeOfCash = changeCheck(0.05, changeOfCash, cid[1][1], "NICKEL");
    }
    console.log("availablecash: ", changeOfCash);
    console.log(output2Customer);
    if (changeOfCash >= 0.01) {
      //Penny
      changeOfCash = changeCheck(0.01, changeOfCash, cid[0][1], "PENNY");
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
// Example cash-in-drawer array:// [["PENNY", 1.01],// ["NICKEL", 2.05],// ["DIME", 3.1],// ["QUARTER", 4.25],// ["ONE", 90],// ["FIVE", 55],// ["TEN", 20],// ["TWENTY", 60],// ["ONE HUNDRED", 100]]
checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

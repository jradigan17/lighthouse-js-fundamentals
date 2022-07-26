const calculateChange = function(total, cash) {
  // Your code here
  let changeDue = cash - total;
  let changeProvide = {};
  const typeChange = [
    {denomination : "twentyDollars", value: 2000},
    {denomination: "tenDollars", value : 1000},
    {denomination : "fiveDollars", value : 500},
    {denomination : "twoDollars", value : 200},
    {denomination : "oneDollar", value : 100},
    {denomination : "quarter", value : 25},
    {denomination : "dime", value : 10},
    {denomination : "nickel", value : 5},
    {denomination : "penny", value : 1}
  ];
  for(let i = 0; i < typeChange.length; i++){
    let tmp = typeChange[i];
    if(changeDue / tmp.value >= 1) {
      let changeAdd = {};
      changeAdd[tmp.denomination] = Math.floor(changeDue / tmp.value);
      changeProvide = Object.assign(changeProvide, changeAdd);
      changeDue = changeDue % tmp.value; 
    };
  };
  return changeProvide;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
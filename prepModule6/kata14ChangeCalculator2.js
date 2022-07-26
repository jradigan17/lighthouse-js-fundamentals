//
// kata14-changecalculator.js
// 2022-06-09
// https://flex-web.compass.lighthouselabs.ca/activities/110
// 


// usage: total is amount due and cash is what is given - all in cents.
// return object of what is being returned (not zero values of those items)
const calculateChange = function(total, cash) 
{
  var theChange = {};

  changeReturned={};
  changeDue=cash - total;

  // console.log('CHANGE DUE:'+changeDue);  // DEBUG

  if(changeDue > 2000) // deal with TWENTIES
  {
    theChange.twentyDollar = Math.floor(changeDue / 2000);
    changeDue = changeDue - (theChange.twentyDollar*2000)
  }
  if(changeDue > 1000) // deal with TENS
  {
    theChange.tenDollar = Math.floor(changeDue / 1000);
    changeDue = changeDue - (theChange.tenDollar*1000)
  }
  if(changeDue > 500) // deal with FIVES
  {
    theChange.fiveDollar = Math.floor(changeDue / 500);
    changeDue = changeDue - (theChange.fiveDollar*500);
  }
  if(changeDue > 200) // deal with TWO
  {
    theChange.twoDollar = Math.floor(changeDue / 200);
    changeDue = changeDue - (theChange.twoDollar*200);
    
  }
  if(changeDue > 100) // deal with ONES
  {
    theChange.oneDollar = Math.floor(changeDue / 100);
    changeDue = changeDue - (theChange.oneDollar*100);
  }
  if(changeDue > 25) // deal with QUARTERS
  {
    theChange.quarters = Math.floor(changeDue / 25);
    changeDue = changeDue - (theChange.quarters*25);
  }
  if(changeDue > 10) // deal with DIMES
  {
    theChange.dimes = Math.floor(changeDue / 10);
    changeDue = changeDue - (theChange.dimes*10);
  }
  if(changeDue > 5) // deal with NICKELS
  {
    theChange.nickels = Math.floor(changeDue / 5);
    changeDue = changeDue - (theChange.nickels*5);
  }
  if(changeDue > 1) // deal with PENNIES
  {
    theChange.pennies = Math.floor(changeDue / 1);
    changeDue = changeDue - (theChange.pennies*1);
  }
  // console.log(theChange);
  return(theChange);
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
expected output:
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/
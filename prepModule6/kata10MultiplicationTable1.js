// From EJ
// kata10-multiplicationtable.js
// 2022-06-05
// https://flex-web.compass.lighthouselabs.ca/activities/106
//


// create a table that is 1 to maxValue -- X & Y axis would go to maxValue
// PROBLEMS: how to return formatted output instead of just 'printing' it in this function?
// how to return FORMATTED output with tabbing so it looks nicer?
//
const multiplicationTable = function(maxValue) 
{
  var output = '';
  // quick error check on a <1 value
  if(maxValue < 1)
  {
    return('error\n');
  }

  // y axis loop
  for (let y = 1; y < maxValue+1; y++)   // using +1 on maxvalue since we're starting at "1" and not "0" for the loops - and doing < the maxvalue
  {
      // build the x axis
      for (let x = 1; x < maxValue+1; x++)
      {
          output += (x * y) + '\t'; // \t here for to force a tab.  cleans up the table formatting instead of using a space
          // extra challenge would be to learn about character counts and padding - then right justify the numbers.
      }
      output += '\n';
  }
  return(output);

};

console.log(multiplicationTable(-5)); // added for error check purposes
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
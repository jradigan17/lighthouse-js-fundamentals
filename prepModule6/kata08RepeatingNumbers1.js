// From EJ
// kata08-repeatingnumbers.js
// 2022-06-09
// https://flex-web.compass.lighthouselabs.ca/activities/104
//


// input: The first will be the value to repeat, the second will be the amount of times to repeat that value.
// expect multiple arrays, or even a single array. 2 array input like this: [[1, 2], [2, 3]]
// the number to show, the repeat value
// return is a STRING
const repeatNumbers = function(data) 
{
  parsedArray=[];
  theOutput='';

  // console.log(data.length); // DEBUG
  
  // we'll need to loop each array found in the input

  for (let y=0; y < data.length; y++) // outer loop - this will grab every array submitted
  {
    parsedArray=data[y]; // pull an array item from the submitted array list

    for (let x=0; x < parsedArray[1]; x++) // build a loop - exit when we've hit the count
    {
      theOutput+=parsedArray[0];
    }
    if (y < data.length-1) // we need to comma+space delimit, so let's do that - just not if it's the last item.
    {
      theOutput+=', '
    }
  }
  return theOutput;
};


/*
EXPECTED OUTPUT:
1111111111
11, 222
10101010, 343434343434, 9292
*/

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2],[78,11]]));
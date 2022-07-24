const sumLargestNumbers = function(data) {
  // Put your solution here
  let sum1 = 0;
  let sum2 = 0;
  let place = 0;

  if(data.length === 0) {
    return "No Values Available";
  };

  if(data.length === 1) {
    return data[0];
  };

  if(data.length >= 2) {
    for (let i = 0;  i < data.length; i++) {
      if(data[i] > sum1) {
        sum1 = data[i];
        place = i;
      };
    };
    data.splice(place, 1);

    for (let j = 0;  j < data.length; j++)  {
      if(data[j] > sum2) {
        sum2 = data[j];
      };
    };

    return sum1 + sum2;
  };  
};



console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

console.log(sumLargestNumbers([10, 1]));
console.log(sumLargestNumbers([3, 2, 1]));
console.log(sumLargestNumbers([92, 34, 4, 6, 10, 2]));

console.log(sumLargestNumbers([1]));
console.log(sumLargestNumbers([]));